"use client"

function Header(){


    const goToMainWebsite = () => {
        window.location.href ="https://www.motionukict.com/"
    }

    return(
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-space-void/90 backdrop-blur-xl supports-backdrop-filter:bg-space-void/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
                <div className="flex items-center gap-1 sm:gap-2" onClick={() => goToMainWebsite()}>
                    <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl animate-pulse-glow">rocket_launch</span>
                    <span className="text-lg sm:text-xl font-black tracking-tighter text-white uppercase">Motion-U</span>
                </div>
    
                <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                    <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#">The Origin</a>
                    <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#athena">Athena</a>
                    <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#neura">Neura</a>
                    <a className="text-sm font-medium text-slate-400 hover:text-primary transition-colors" href="#paradox">Paradox Jump</a>
                </nav>
                <div className="flex items-center gap-2 sm:gap-4">
                    <button className="bg-primary hover:bg-primary/90 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95">
                        Initiate Sequence
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;