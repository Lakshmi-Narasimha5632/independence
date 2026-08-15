import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  AlertCircle,
  Loader2,
} from 'lucide-react';

const anthemDetails = {
  composer: 'Rabindranath Tagore',
  adopted: '24 January 1950',
  language: 'Bengali (Sanskritised)',

  lyrics: [
    {
      hindi: 'जनगणमन-अधिनायक जय हे भारतभाग्यविधाता।',
      english:
        'Jana-gana-mana-adhinayaka jaya he, Bharata-bhagya-vidhata',
    },
    {
      hindi: 'पंजाब-सिंधु-गुजरात-मराठा द्राविड़-उत्कल-बंग',
      english:
        'Punjaba-Sindhu-Gujarata-Maratha, Dravida-Utkala-Banga',
    },
    {
      hindi: 'विंध्य-हिमाचल-यमुना-गंगा उच्छल-जलधि-तरंग',
      english:
        'Vindhya-Himachala-Yamuna-Ganga, Uchchala-jaladhi-taranga',
    },
    {
      hindi: 'तव शुभ नामे जागे, तव शुभ आशिष मागे,',
      english: 'Tava subha name jage, tava subha asisa mage',
    },
    {
      hindi: 'गाहे तव जयगाथा।',
      english: 'Gahe tava jaya-gatha',
    },
    {
      hindi: 'जनगणमंगलदायक जय हे भारतभाग्यविधाता।',
      english:
        'Jana-gana-mangala-dayaka jaya he, Bharata-bhagya-vidhata',
    },
    {
      hindi: 'जय हे, जय हे, जय हे, जय जय जय जय हे॥',
      english:
        'Jaya he, jaya he, jaya he, jaya jaya jaya jaya he',
    },
  ],
};

export default function NationalAnthem() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [activeLine, setActiveLine] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const audioRef = useRef(null);

  /*
   * IMPORTANT
   *
   * Put the audio file here:
   *
   * public/audio/national-anthem.mp3
   *
   * Since this is inside the public folder,
   * the browser URL is:
   *
   * /audio/national-anthem.mp3
   */
  const officialAnthemUrl = `${import.meta.env.BASE_URL}audio/national-anthem.mp3`;

  // =========================================================
  // AUDIO INITIALIZATION
  // =========================================================

  useEffect(() => {
    const audio = new Audio();

    audio.src = officialAnthemUrl;
    audio.preload = 'auto';
    audio.loop = false;
    audio.volume = 0.8;

    audioRef.current = audio;

    // -------------------------------------------------------
    // Audio loaded
    // -------------------------------------------------------

    const handleLoadedMetadata = () => {
      console.log(
        'National Anthem loaded successfully.',
        'Duration:',
        audio.duration
      );
    };

    // -------------------------------------------------------
    // Audio can play
    // -------------------------------------------------------

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    // -------------------------------------------------------
    // Audio loading
    // -------------------------------------------------------

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    // -------------------------------------------------------
    // Audio error
    // -------------------------------------------------------

    const handleError = () => {
      setIsLoading(false);
      setIsPlaying(false);

      console.error(
        'National Anthem audio could not be loaded.'
      );

      console.error(
        'Expected audio location:',
        '/audio/national-anthem.mp3'
      );

      console.error(
        'Make sure the file exists inside:',
        'public/audio/national-anthem.mp3'
      );
    };

    // -------------------------------------------------------
    // Time update
    // -------------------------------------------------------

    const handleTimeUpdate = () => {
      if (!audio.duration || isNaN(audio.duration)) {
        return;
      }

      // Progress
      const currentProgress =
        (audio.currentTime / audio.duration) * 100;

      setProgress(
        isNaN(currentProgress) ? 0 : currentProgress
      );

      // ---------------------------------------------------
      // Lyric synchronization
      // ---------------------------------------------------

      const ratio =
        audio.currentTime / audio.duration;

      const lineIndex = Math.min(
        Math.floor(
          ratio * anthemDetails.lyrics.length
        ),
        anthemDetails.lyrics.length - 1
      );

      setActiveLine(lineIndex);
    };

    // -------------------------------------------------------
    // Audio ended
    // -------------------------------------------------------

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setActiveLine(0);
      setIsLoading(false);
    };

    // -------------------------------------------------------
    // Audio playing
    // -------------------------------------------------------

    const handlePlaying = () => {
      setIsPlaying(true);
      setIsLoading(false);
    };

    // -------------------------------------------------------
    // Audio paused
    // -------------------------------------------------------

    const handlePause = () => {
      setIsPlaying(false);
    };

    // -------------------------------------------------------
    // Events
    // -------------------------------------------------------

    audio.addEventListener(
      'loadedmetadata',
      handleLoadedMetadata
    );

    audio.addEventListener(
      'canplay',
      handleCanPlay
    );

    audio.addEventListener(
      'loadstart',
      handleLoadStart
    );

    audio.addEventListener(
      'error',
      handleError
    );

    audio.addEventListener(
      'timeupdate',
      handleTimeUpdate
    );

    audio.addEventListener(
      'ended',
      handleEnded
    );

    audio.addEventListener(
      'playing',
      handlePlaying
    );

    audio.addEventListener(
      'pause',
      handlePause
    );

    // -------------------------------------------------------
    // Cleanup
    // -------------------------------------------------------

    return () => {
      audio.pause();

      audio.removeEventListener(
        'loadedmetadata',
        handleLoadedMetadata
      );

      audio.removeEventListener(
        'canplay',
        handleCanPlay
      );

      audio.removeEventListener(
        'loadstart',
        handleLoadStart
      );

      audio.removeEventListener(
        'error',
        handleError
      );

      audio.removeEventListener(
        'timeupdate',
        handleTimeUpdate
      );

      audio.removeEventListener(
        'ended',
        handleEnded
      );

      audio.removeEventListener(
        'playing',
        handlePlaying
      );

      audio.removeEventListener(
        'pause',
        handlePause
      );

      audioRef.current = null;
    };
  }, []);

  // =========================================================
  // VOLUME
  // =========================================================

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume =
      isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // =========================================================
  // PLAY / PAUSE
  // =========================================================

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) {
      console.error(
        'National Anthem audio element not found.'
      );
      return;
    }

    // -------------------------------------------------------
    // PAUSE
    // -------------------------------------------------------

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    // -------------------------------------------------------
    // PLAY
    // -------------------------------------------------------

    try {
      setIsLoading(true);

      /*
       * This play() call happens directly
       * from the user's button click.
       *
       * Therefore browser autoplay restrictions
       * should not block it.
       */
      await audio.play();

      setIsPlaying(true);
      setIsLoading(false);

      console.log(
        'National Anthem playback started.'
      );
    } catch (error) {
      setIsPlaying(false);
      setIsLoading(false);

      console.error(
        'National Anthem playback failed:',
        error
      );
    }
  };

  // =========================================================
  // STOP
  // =========================================================

  const handleStop = () => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();

    audio.currentTime = 0;

    setIsPlaying(false);
    setProgress(0);
    setActiveLine(0);
    setIsLoading(false);
  };

  // =========================================================
  // PROGRESS / SEEK
  // =========================================================

  const handleSeek = (event) => {
    const audio = audioRef.current;

    if (!audio || !audio.duration) {
      return;
    }

    const newProgress =
      Number(event.target.value);

    audio.currentTime =
      (newProgress / 100) * audio.duration;

    setProgress(newProgress);
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <section
      id="anthem"
      className="py-24 bg-indiaBlue-deep relative border-t border-white/5 overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND LIGHTING
      ====================================================== */}

      <div
        className={`absolute top-1/2 left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[350px] sm:w-[450px]
        h-[350px] sm:h-[450px]
        rounded-full
        transition-all
        duration-[2000ms]
        blur-[100px]
        pointer-events-none
        ${
          isPlaying
            ? 'bg-indigo-500/10 scale-125'
            : 'bg-transparent scale-100'
        }`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="mb-12">

          <span
            className="text-xs uppercase
            tracking-[0.2em]
            font-semibold
            text-saffron
            bg-saffron/10
            px-3 py-1
            rounded-full
            border border-saffron/20
            inline-block mb-3"
          >
            National Anthem
          </span>

          <h2
            className="text-4xl
            sm:text-5xl
            font-serif
            font-bold
            text-white"
          >
            Now, Let Us Stand Together
          </h2>

          <p
            className="text-gray-400
            max-w-xl
            mx-auto
            mt-3
            text-sm
            sm:text-base"
          >
            Please rise and join in the respect
            of the National Anthem of India.
          </p>

        </div>

        {/* ===================================================
            AUDIO INTERFACE
        ==================================================== */}

        <div
          className="grid
          grid-cols-1
          md:grid-cols-12
          gap-8
          items-center
          bg-white/[0.01]
          border border-white/5
          rounded-3xl
          p-6
          sm:p-10
          shadow-2xl
          relative
          overflow-hidden"
        >

          {/* Saffron decoration */}

          <div
            className="absolute
            top-0
            left-0
            w-16
            h-1
            bg-saffron"
          />

          {/* Green decoration */}

          <div
            className="absolute
            bottom-0
            right-0
            w-16
            h-1
            bg-indiaGreen"
          />

          {/* =================================================
              LEFT - ASHOKA CHAKRA
          ================================================== */}

          <div
            className="md:col-span-5
            flex
            flex-col
            items-center
            justify-center"
          >

            <div
              className={`relative
              p-8
              rounded-full
              border-2
              transition-all
              duration-1000
              ${
                isPlaying
                  ? 'border-indigo-500/30 scale-105 shadow-2xl'
                  : 'border-white/5 scale-90'
              }`}
            >

              {/* Ashoka Chakra */}

              <div
                className="w-40
                h-40
                rounded-full
                border-[6px]
                border-blue-900
                flex
                items-center
                justify-center
                relative
                bg-white
                shadow-xl"
              >

                <svg
                  viewBox="0 0 24 24"
                  className={`w-full
                  h-full
                  text-blue-900
                  p-0.5
                  ${
                    isPlaying
                      ? 'spin-chakra'
                      : ''
                  }`}
                >

                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="1.8"
                    fill="currentColor"
                  />

                  {/* 24 Ashoka Chakra spokes */}

                  {[...Array(24)].map(
                    (_, i) => (
                      <line
                        key={i}
                        x1="12"
                        y1="12"
                        x2="12"
                        y2="2"
                        stroke="currentColor"
                        strokeWidth="0.3"
                        transform={`rotate(${i * 15} 12 12)`}
                      />
                    )
                  )}

                </svg>

              </div>

            </div>

            {/* Respect Notice */}

            <span
              className="text-[10px]
              text-gray-500
              uppercase
              tracking-widest
              mt-6
              flex
              items-center
              gap-1.5
              justify-center"
            >

              <AlertCircle
                className="w-3.5
                h-3.5
                text-saffron"
              />

              Stand at Attention

            </span>

          </div>

          {/* =================================================
              RIGHT SIDE
              IMPORTANT: FIXED HEIGHT
          ================================================== */}

          <div
            className="md:col-span-7
            flex
            flex-col
            justify-between
            h-[300px]
            text-left"
          >

            {/* =================================================
                LYRICS
            ================================================== */}

            <div
              className="flex-1
              overflow-y-auto
              pr-2
              scroll-smooth
              border-b
              border-white/5
              pb-4
              hide-scrollbar"
            >

              <div className="space-y-4">

                {anthemDetails.lyrics.map(
                  (line, idx) => {

                    const isActive =
                      activeLine === idx &&
                      isPlaying;

                    return (
                      <div
                        key={idx}
                        className={`p-2.5
                        rounded-xl
                        border
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? 'bg-gradient-to-r from-saffron/10 to-indiaGreen/10 border-white/10 text-glow-saffron'
                            : 'border-transparent opacity-40'
                        }`}
                      >

                        <h4
                          className={`text-base
                          sm:text-lg
                          font-bold
                          font-serif
                          ${
                            isActive
                              ? 'text-white'
                              : 'text-gray-400'
                          }`}
                        >
                          {line.hindi}
                        </h4>

                        <p
                          className="text-[11px]
                          sm:text-xs
                          text-gray-400
                          mt-1
                          italic
                          font-sans
                          font-medium
                          tracking-wide"
                        >
                          {line.english}
                        </p>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

            {/* =================================================
                AUDIO CONTROLS
            ================================================== */}

            <div
              className="pt-4
              flex
              items-center
              justify-between
              gap-4"
            >

              {/* PLAY / STOP */}

              <div
                className="flex
                items-center
                gap-2"
              >

                {/* PLAY / PAUSE */}

                <button
                  onClick={togglePlay}
                  disabled={isLoading}
                  className={`p-4
                  rounded-full
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  disabled:opacity-70
                  disabled:cursor-not-allowed
                  ${
                    isPlaying
                      ? 'bg-amber-600 hover:bg-amber-700'
                      : 'bg-saffron hover:bg-saffron-dark'
                  }`}
                  aria-label={
                    isPlaying
                      ? 'Pause anthem'
                      : 'Play anthem'
                  }
                >

                  {isLoading ? (
                    <Loader2
                      className="w-5 h-5 animate-spin"
                    />
                  ) : isPlaying ? (
                    <Pause
                      className="w-5 h-5"
                    />
                  ) : (
                    <Play
                      className="w-5 h-5 fill-current"
                    />
                  )}

                </button>

                {/* STOP */}

                <button
                  onClick={handleStop}
                  className="p-3
                  rounded-full
                  bg-stone-800
                  hover:bg-stone-700
                  text-gray-300
                  transition-colors
                  border border-white/5"
                  aria-label="Stop anthem"
                >

                  <RotateCcw
                    className="w-4 h-4"
                  />

                </button>

              </div>

              {/* =================================================
                  VOLUME
              ================================================== */}

              <div
                className="flex
                items-center
                gap-2"
              >

                {/* MUTE */}

                <button
                  onClick={() =>
                    setIsMuted(!isMuted)
                  }
                  className="p-2
                  text-gray-400
                  hover:text-white
                  transition-colors"
                  aria-label="Toggle mute"
                >

                  {isMuted ? (
                    <VolumeX
                      className="w-4 h-4
                      text-red-400"
                    />
                  ) : (
                    <Volume2
                      className="w-4 h-4"
                    />
                  )}

                </button>

                {/* VOLUME SLIDER */}

                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => {
                    setVolume(
                      parseFloat(
                        e.target.value
                      )
                    );

                    setIsMuted(false);
                  }}
                  className="w-16
                  sm:w-20
                  accent-saffron
                  h-1
                  bg-stone-700
                  rounded-full
                  appearance-none
                  cursor-pointer"
                  aria-label="Adjust volume"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}