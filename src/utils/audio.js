/**
 * Web Audio API Soundscape & Sensory Feedback
 * Synthesizes organic soundscapes, tactile auditory cues, and harmonic chords without external assets.
 * Zero bundle overhead, 0ms latency, 100% client-side.
 */

class OlfactiveAudioEngine {
  constructor() {
    this.ctx = null;
    this.ambientNodes = null;
    this.ambientActive = false;
    this.sfxEnabled = true;
    this.listeners = new Set();
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((fn) => fn(this.ambientActive));
  }

  // Soft crystalline chime on selecting fragrance note or copying
  playChime(freq = 528, duration = 1.2) {
    if (!this.sfxEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.008, this.ctx.currentTime + duration * 0.4);

      gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Graceful fallback
    }
  }

  // Harmonic Olfactive Chord for 3 Layered Notes (Top + Heart + Base)
  playLayeredChord(freqs = [659, 528, 330], duration = 2.4) {
    if (!this.sfxEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = idx === 0 ? 'sine' : idx === 1 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.005, this.ctx.currentTime + duration * 0.5);

        const startTime = this.ctx.currentTime + idx * 0.12; // Arpeggio cascade
        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.08 / freqs.length, startTime + 0.06);
        gain.gain.exponentialRampToValueAtTime(0.00001, startTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration);
      });
    } catch {
      // Ignore
    }
  }

  // Tactile velvet click for tabs / controls
  playClick() {
    if (!this.sfxEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Ignore
    }
  }

  // Fragrance flacon spray atomizer sound (aerated mist simulation)
  playSpray() {
    if (!this.sfxEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const sampleRate = this.ctx.sampleRate;
      const bufferSize = sampleRate * 0.4; // 400ms
      const buffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);

      // Pinkish aerodynamic air hiss
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        data[i] = (b0 + b1 + b2 + white * 0.5) * 0.12;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      // Bandpass filter to emulate fine mist nozzle mechanics
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2600, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1800, this.ctx.currentTime + 0.4);
      filter.Q.setValueAtTime(1.8, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.24, this.ctx.currentTime + 0.035);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start();
    } catch {
      // Ignore
    }
  }

  // Ambient serene meditation drone (432Hz / 528Hz harmonics)
  toggleAmbient() {
    this.init();
    if (!this.ctx) return false;

    if (this.ambientActive) {
      this.stopAmbient();
      this.ambientActive = false;
    } else {
      this.ambientActive = true;
      this.startAmbient();
      this.playChime(639, 2.0);
    }
    this.notify();
    return this.ambientActive;
  }

  startAmbient() {
    if (!this.ctx) return;
    this.stopAmbient();

    try {
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const osc3 = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const masterGain = this.ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(108, this.ctx.currentTime); // Root warm note (A2)

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(162.5, this.ctx.currentTime); // Fifth harmonic (E3)

      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(216, this.ctx.currentTime); // Octave harmonic (A3)

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, this.ctx.currentTime);

      masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.05, this.ctx.currentTime + 2.5);

      osc1.connect(filter);
      osc2.connect(filter);
      osc3.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      osc1.start();
      osc2.start();
      osc3.start();

      this.ambientNodes = { osc1, osc2, osc3, masterGain };
    } catch {
      // Ignore
    }
  }

  stopAmbient() {
    if (this.ambientNodes) {
      try {
        const { osc1, osc2, osc3, masterGain } = this.ambientNodes;
        masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);
        setTimeout(() => {
          try {
            osc1.stop();
            osc2.stop();
            osc3.stop();
          } catch {}
        }, 600);
      } catch {}
      this.ambientNodes = null;
    }
  }
}

export const soundEngine = new OlfactiveAudioEngine();
