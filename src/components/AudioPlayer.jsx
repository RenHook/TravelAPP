import { useRef, useState, useEffect } from 'react'

function AudioPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [status, setStatus] = useState('Toca ▶ para reproducir')

  function fmtTime(s) {
    if (!s || !isFinite(s)) return '0:00'
    return Math.floor(s / 60) + ':' + ('0' + Math.floor(s % 60)).slice(-2)
  }

  useEffect(() => {
    const aud = audioRef.current
    if (!aud) return

    const onMeta = () => setDuration(aud.duration)
    const onDurChange = () => { if (aud.duration && isFinite(aud.duration)) setDuration(aud.duration) }
    const onTimeUpdate = () => setCurrentTime(aud.currentTime)
    const onEnded = () => { setIsPlaying(false); setStatus('Finalizado') }
    const onWaiting = () => setStatus('Cargando…')
    const onPlaying = () => setStatus('Reproduciendo…')
    const onError = () => { setStatus('⚠ Error al cargar audio'); setIsPlaying(false) }

    aud.addEventListener('loadedmetadata', onMeta)
    aud.addEventListener('durationchange', onDurChange)
    aud.addEventListener('timeupdate', onTimeUpdate)
    aud.addEventListener('ended', onEnded)
    aud.addEventListener('waiting', onWaiting)
    aud.addEventListener('playing', onPlaying)
    aud.addEventListener('error', onError)

    return () => {
      aud.removeEventListener('loadedmetadata', onMeta)
      aud.removeEventListener('durationchange', onDurChange)
      aud.removeEventListener('timeupdate', onTimeUpdate)
      aud.removeEventListener('ended', onEnded)
      aud.removeEventListener('waiting', onWaiting)
      aud.removeEventListener('playing', onPlaying)
      aud.removeEventListener('error', onError)
    }
  }, [])

  function toggleAudio() {
    const aud = audioRef.current
    if (!aud) return
    if (aud.paused) {
      const p = aud.play()
      if (p && p.then) {
        p.then(() => {
          setIsPlaying(true)
          setStatus('Reproduciendo…')
        }).catch(() => {
          setStatus('⚠ No se pudo reproducir')
        })
      } else {
        setIsPlaying(true)
      }
    } else {
      aud.pause()
      setIsPlaying(false)
      setStatus('En pausa')
    }
  }

  function skipAudio(sec) {
    const aud = audioRef.current
    if (!aud || !aud.duration) return
    aud.currentTime = Math.max(0, Math.min(aud.duration, aud.currentTime + sec))
  }

  function seekAudio(e) {
    const aud = audioRef.current
    if (!aud || !aud.duration) return
    const bar = e.currentTarget
    const rect = bar.getBoundingClientRect()
    const x = e.touches ? e.touches[0].clientX : e.clientX
    aud.currentTime = Math.max(0, Math.min(1, (x - rect.left) / rect.width)) * aud.duration
  }

  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <>
      <audio
        ref={audioRef}
        src="https://travelsmart.mx/Audio_260306.m4a"
        preload="metadata"
        loop
      />
      <div className="audio-player" id="audioPlayerWidget">
        <div className="audio-player-top">
          <div className="audio-info">
            <div className="audio-title">🎵 El Sueño de Todos @reinasdecorazonesoficial</div>
            <div className="audio-subtitle">{status}</div>
          </div>
        </div>
        <div className="audio-controls">
          <button
            className="audio-ctrl-btn"
            onClick={() => skipAudio(-10)}
            aria-label="Retroceder 10s"
            title="-10s"
          >
            <svg viewBox="0 0 24 24">
              <path d="M12.5 3C7.81 3 4.01 6.54 3.56 11H1l3.5 4 3.5-4H5.58C6.01 7.65 8.97 5 12.5 5c3.87 0 7 3.13 7 7s-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C7.88 20.1 10.05 21 12.5 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
            </svg>
            <span className="audio-skip-label">10</span>
          </button>
          <button
            className={`audio-play-btn${isPlaying ? ' playing' : ''}`}
            id="audioPlayBtn"
            onClick={toggleAudio}
            aria-label="Play / Pause"
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button
            className="audio-ctrl-btn"
            onClick={() => skipAudio(10)}
            aria-label="Avanzar 10s"
            title="+10s"
          >
            <svg viewBox="0 0 24 24">
              <path d="M11.5 3c4.69 0 8.49 3.54 8.94 8H23l-3.5 4-3.5-4h2.42C18 7.65 15.04 5 11.5 5 7.63 5 4.5 8.13 4.5 12s3.13 7 7 7c1.93 0 3.68-.79 4.94-2.06l1.42 1.42C16.12 20.1 13.95 21 11.5 21c-4.97 0-9-4.03-9-9s4.03-9 9-9z" />
            </svg>
            <span className="audio-skip-label">10</span>
          </button>
        </div>
        <div className="audio-progress-wrap">
          <span className="audio-time">{fmtTime(currentTime)}</span>
          <div
            className="audio-progress-bar"
            id="audioProgressBar"
            onClick={seekAudio}
          >
            <div
              className="audio-progress-fill"
              id="audioProgressFill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="audio-time">{fmtTime(duration)}</span>
        </div>
      </div>
    </>
  )
}

export default AudioPlayer
