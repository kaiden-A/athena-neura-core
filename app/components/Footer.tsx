

function Footer(){


    return(
        <footer className="border-t border-white/10 py-12 md:py-16 bg-black/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
                <div className="flex flex-col items-center md:items-start gap-3">
                    <div className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">rocket_launch</span><span className="text-xl sm:text-2xl font-bold tracking-tighter uppercase">Motion-U</span></div>
                    <p className="text-[0.65rem] sm:text-xs text-slate-500 uppercase tracking-widest">A Legacy Reborn • 2341 Paradox Era</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400">
                    <a className="hover:text-primary transition-colors" href="#">Planetary Laws</a>
                    <a className="hover:text-primary transition-colors" href="#">Archival Data</a>
                    <a className="hover:text-primary transition-colors" href="#">Subspace Comm</a>
                </div>
                <p className="text-[0.65rem] sm:text-xs text-slate-500 font-mono">© LUMEN-UNIVERSE // MOTION-U_SYSTEMS</p>
            </div>
        </footer>
    )
}

export default Footer;