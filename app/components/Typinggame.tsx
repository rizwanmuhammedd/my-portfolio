"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "@/public/lib/gsap";
import { ScrollTrigger } from "gsap/all";
import { RotateCcw, Trophy, Zap, Target, Clock } from "lucide-react";

const Q: Record<string, string[]> = {
  easy: [
    "The best way to predict the future is to invent it.",
    "Clean code is not written by following rules but by a programmer who cares.",
    "Every great application begins with a single line of thoughtful code.",
    "A good developer writes code that humans can understand easily.",
  ],
  medium: [
    "React and dotNET together create powerful full stack applications. The frontend communicates through well-designed APIs and clear data contracts.",
    "Software engineering is the art of building something complex from simple components. Performance and readability are two sides of the same coin.",
    "Building scalable systems requires careful planning and clean architecture. The goal is always to write software that solves real problems efficiently.",
  ],
  hard: [
    "The fundamental theorem of software engineering states that any problem can be solved by adding another layer of indirection, but this usually creates more problems than it solves in the long run.",
    "Building scalable distributed systems requires mastery of trade-offs between consistency, availability, and partition tolerance as described by the CAP theorem in computer science.",
    "Entity Framework Core is a lightweight, extensible, open-source, and cross-platform version of the popular Entity Framework data access technology for modern dotNET applications.",
  ],
};
const TIME: Record<string,number> = { easy:30, medium:45, hard:60 };
type Diff = "easy"|"medium"|"hard";

export default function TypingGame() {
  const ref      = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>|null>(null);

  const [diff,    setDiff]    = useState<Diff>("medium");
  const [qIdx,    setQIdx]    = useState(0);
  const [typed,   setTyped]   = useState("");
  const [live,    setLive]    = useState(false);
  const [done,    setDone]    = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [wpm,     setWpm]     = useState(0);
  const [acc,     setAcc]     = useState(100);
  const [errs,    setErrs]    = useState(0);
  const [best,    setBest]    = useState(0);

  const text    = Q[diff][qIdx % Q[diff].length];
  const maxTime = TIME[diff];
  const left    = Math.max(0, maxTime - elapsed);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo([".tg-eye",".tg-h2"],
        { opacity:0, y:36 },
        { opacity:1, y:0, duration:.75, stagger:.13, scrollTrigger:{ trigger:".tg-head", start:"top 82%" } });
      gsap.fromTo(".tg-rule",
        { scaleX:0, transformOrigin:"left" },
        { scaleX:1, duration:.85, ease:"power3.out", scrollTrigger:{ trigger:".tg-head", start:"top 82%" } });
      gsap.fromTo(".tg-hud-cell",
        { opacity:0, y:24 },
        { opacity:1, y:0, duration:.5, stagger:.1, scrollTrigger:{ trigger:".tg-hud", start:"top 88%" } });
      gsap.fromTo(".tg-panel",
        { opacity:0, y:44 },
        { opacity:1, y:0, duration:.72, scrollTrigger:{ trigger:".tg-panel", start:"top 86%" } });
    }, ref);
    return () => ctx.revert();
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  const reset = useCallback((d?: Diff) => {
    stopTimer();
    const nd = d || diff;
    setTyped(""); setLive(false); setDone(false);
    setElapsed(0); setWpm(0); setAcc(100); setErrs(0);
    setQIdx(p => (p + 1) % Q[nd].length);
    if (d) setDiff(d);
    setTimeout(() => inputRef.current?.focus(), 80);
  }, [stopTimer, diff]);

  // time-up
  useEffect(() => {
    if (live && !done && elapsed >= maxTime) {
      stopTimer();
      setDone(true);
      const fw = Math.round((((typed.length - errs) / 5) / maxTime) * 60);
      setWpm(fw); setBest(p => Math.max(p, fw));
    }
  }, [elapsed, live, done, maxTime, typed, errs, stopTimer]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    if (done) return;

    if (!live && v.length === 1) {
      setLive(true);
      timerRef.current = setInterval(() => setElapsed(p => p + 1), 1000);
    }

    setTyped(v);
    let e2 = 0;
    for (let i = 0; i < v.length; i++) if (v[i] !== text[i]) e2++;
    setErrs(e2);
    setAcc(v.length > 0 ? Math.round(((v.length - e2) / v.length) * 100) : 100);
    if (elapsed > 0) setWpm(Math.round((((v.length - e2) / 5) / elapsed) * 60));

    if (v === text) {
      stopTimer();
      setDone(true);
      const fw = Math.round((((v.length - e2) / 5) / Math.max(elapsed, 1)) * 60);
      setWpm(fw); setBest(p => Math.max(p, fw));
      gsap.fromTo(".tg-panel",
        { boxShadow:"0 0 0px #c8f135" },
        { boxShadow:"0 0 60px #c8f13550, 0 0 120px #c8f13520", duration:.55, yoyo:true, repeat:3 });
    }
  };

  const prog      = Math.round((typed.length / text.length) * 100);
  const timeColor = left <= 10 ? "#ff5050" : "#c8f135";
  const status    = done ? "done" : live ? "live" : "idle";

  const renderText = () => text.split("").map((ch, i) => {
    let c = "tg-p";
    if (i < typed.length) c = typed[i] === ch ? "tg-ok" : "tg-err";
    else if (i === typed.length) c = "tg-cur";
    return <span key={i} className={c}>{ch}</span>;
  });

  return (
    <>
      <style>{`
        .tg-sec { background:#000; padding:100px 0; border-top:1px solid #161c09; position:relative; z-index:1; }
        .tg-inner { max-width:1280px; margin:0 auto; padding:0 24px; }

        /* Difficulty */
        .tg-diff { display:flex; gap:6px; margin:34px 0 30px; flex-wrap:wrap; }
        .tg-dbtn { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; background:#000; color:#283510; border:1px solid #161c09; cursor:pointer; padding:8px 18px; transition:all .18s; }
        .tg-dbtn:hover { border-color:#c8f13530; color:#c8f13566; }
        .tg-dbtn.on { background:#c8f135; color:#000; border-color:#c8f135; }

        /* HUD */
        .tg-hud { display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:#161c09; margin-bottom:26px; }
        .tg-hud-cell { background:#000; padding:16px 18px; text-align:center; }
        .tg-hud-val { font-family:'Barlow Condensed',sans-serif; font-size:28px; font-weight:900; color:#c8f135; line-height:1; margin-bottom:5px; animation:glow-pulse 3s ease-in-out infinite; }
        .tg-hud-lbl { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.26em; text-transform:uppercase; color:#283510; }

        /* Panel */
        .tg-panel { border:1px solid #161c09; padding:28px 26px; transition:box-shadow .3s; }
        .tg-panel:focus-within { box-shadow:0 0 0 1px #c8f13520; }

        /* Toolbar */
        .tg-bar { display:flex; align-items:center; justify-content:space-between; margin-bottom:16px; gap:10px; flex-wrap:wrap; }
        .tg-bar-l { display:flex; align-items:center; gap:8px; }
        .tg-clock { font-family:'Barlow Condensed',sans-serif; font-size:12px; font-weight:800; letter-spacing:.2em; padding:5px 12px; border:1px solid currentColor; transition:color .3s; }
        .tg-stat-badge { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:#283510; padding:5px 12px; border:1px solid #161c09; }
        .tg-stat-badge.live { color:#c8f13580; border-color:#c8f13520; }
        .tg-stat-badge.done { color:#c8f135;   border-color:#c8f13542; }
        .tg-reset { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:800; letter-spacing:.18em; text-transform:uppercase; background:transparent; color:#283510; border:1px solid #161c09; padding:6px 14px; cursor:pointer; display:flex; align-items:center; gap:6px; transition:all .18s; }
        .tg-reset:hover { border-color:#c8f13530; color:#c8f13566; }

        /* Progress bar */
        .tg-prog { height:2px; background:#0d1008; margin-bottom:20px; }
        .tg-prog-fill { height:100%; background:#c8f135; transition:width .15s; box-shadow:0 0 8px #c8f13560; }

        /* Text display */
        .tg-text { font-family:'Barlow Condensed',sans-serif; font-size:20px; font-weight:600; letter-spacing:.018em; line-height:1.68; color:#1a2309; user-select:none; margin-bottom:20px; word-break:break-word; cursor:text; }
        .tg-p   { color:#1a2309; }
        .tg-ok  { color:#c8f135; }
        .tg-err { color:#ff5050; text-decoration:underline; text-decoration-color:#ff505055; }
        .tg-cur { color:#c8f135; position:relative; }
        .tg-cur::after { content:''; position:absolute; bottom:-1px; left:0; width:100%; height:2px; background:#c8f135; animation:blink .7s step-end infinite; box-shadow:0 0 7px #c8f135; }

        /* Input */
        .tg-input { width:100%; padding:12px 15px; background:#040a01; border:1px solid #161c09; color:#c8f135; font-family:'Barlow Condensed',sans-serif; font-size:16px; font-weight:600; letter-spacing:.03em; outline:none; transition:border-color .18s; caret-color:#c8f135; }
        .tg-input:focus { border-color:#c8f13538; }
        .tg-input::placeholder { color:#1a2309; }
        .tg-input:disabled { opacity:.28; cursor:not-allowed; }

        /* Done banner */
        .tg-done { margin-top:16px; border:1px solid #c8f13540; padding:17px 20px; display:flex; align-items:center; gap:14px; background:#c8f13506; }
        .tg-done-icon { color:#c8f135; flex-shrink:0; }
        .tg-done-title { font-family:'Barlow Condensed',sans-serif; font-size:14px; font-weight:900; text-transform:uppercase; letter-spacing:.1em; color:#c8f135; margin-bottom:3px; }
        .tg-done-sub { font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:700; letter-spacing:.18em; color:#c8f13558; }
        .tg-next { margin-left:auto; flex-shrink:0; font-family:'Barlow Condensed',sans-serif; font-size:10px; font-weight:800; letter-spacing:.2em; text-transform:uppercase; background:#c8f135; color:#000; border:none; cursor:pointer; padding:10px 20px; transition:background .15s; display:flex; align-items:center; gap:8px; }
        .tg-next:hover { background:#b3d820; }

        /* Best + tip */
        .tg-meta { margin-top:12px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; }
        .tg-best { font-family:'Barlow Condensed',sans-serif; font-size:9px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:#283510; display:flex; align-items:center; gap:7px; }
        .tg-best b { color:#c8f135; font-weight:900; }
        .tg-tip { font-size:11px; font-weight:300; color:#1a2309; display:flex; align-items:center; gap:6px; }

        @media(max-width:768px) { .tg-hud { grid-template-columns:1fr 1fr; } .tg-text { font-size:16px; } }
        @media(max-width:640px) { .tg-sec { padding:72px 0; } .tg-hud-val { font-size:22px; } .tg-panel { padding:18px 14px; } }
      `}</style>

      <section id="typing" className="tg-sec" ref={ref}>
        <div className="tg-inner">
          <div className="tg-head">
            <span className="sec-eye tg-eye">( 03 ) — Typing Challenge</span>
            <h2 className="sec-h2 tg-h2">Test Your <span className="ghost">Speed</span></h2>
            <div className="sec-rule tg-rule"/>
          </div>

          {/* Difficulty */}
          <div className="tg-diff">
            {(["easy","medium","hard"] as Diff[]).map(d => (
              <button key={d} onClick={() => reset(d)} className={`tg-dbtn ${diff===d?"on":""}`}>{d}</button>
            ))}
          </div>

          {/* HUD */}
          <div className="tg-hud">
            {[
              { Icon:Zap,    v:wpm,   l:"WPM",     s:"",  col:"#c8f135" },
              { Icon:Target, v:acc,   l:"Accuracy", s:"%", col:"#c8f135" },
              { Icon:Trophy, v:errs,  l:"Errors",  s:"",  col: errs>0 ? "#ff5050" : "#c8f135" },
              { Icon:Clock,  v:left,  l:"Time Left",s:"s", col:timeColor },
            ].map(({Icon,v,l,s,col}) => (
              <div key={l} className="tg-hud-cell">
                <div className="tg-hud-val" style={{color:col}}>{v}{s}</div>
                <div className="tg-hud-lbl">{l}</div>
              </div>
            ))}
          </div>

          {/* Panel */}
          <div className="tg-panel">
            <div className="tg-bar">
              <div className="tg-bar-l">
                <div className="tg-clock" style={{color:timeColor}}>
                  {String(Math.floor(elapsed/60)).padStart(2,"0")}:{String(elapsed%60).padStart(2,"0")}
                </div>
                <div className={`tg-stat-badge ${status}`}>
                  {status==="idle"?"Ready":status==="live"?"● Live":"✓ Done"}
                </div>
              </div>
              <button className="tg-reset" onClick={() => reset()}>
                <RotateCcw size={10}/> New Text
              </button>
            </div>

            <div className="tg-prog">
              <div className="tg-prog-fill" style={{width:`${prog}%`}}/>
            </div>

            <div className="tg-text" onClick={() => inputRef.current?.focus()}>
              {renderText()}
            </div>

            <input ref={inputRef} type="text" value={typed} onChange={handleInput}
              disabled={done}
              placeholder={status==="idle" ? "Click here and start typing…" : ""}
              className="tg-input"
              spellCheck={false} autoComplete="off" autoCorrect="off" autoCapitalize="off"/>

            {done && (
              <div className="tg-done">
                <Trophy size={20} className="tg-done-icon"/>
                <div>
                  <div className="tg-done-title">{wpm} WPM — {acc}% Accuracy</div>
                  <div className="tg-done-sub">{errs===0 ? "Perfect — zero errors!" : `${errs} error${errs>1?"s":""}`}</div>
                </div>
                <button className="tg-next" onClick={() => reset()}>
                  <RotateCcw size={11}/> Next
                </button>
              </div>
            )}

            <div className="tg-meta">
              {best > 0 && (
                <div className="tg-best">
                  <Trophy size={10}/> Session best: <b>{best} WPM</b>
                </div>
              )}
              <div className="tg-tip">
                <Zap size={10} color="#c8f13530"/> Accuracy first, then speed. Difficulty changes time &amp; text length.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}