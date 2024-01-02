const HeaderInitiator = {
    init(header){
        window.addEventListener('scroll', ()=>{
            this._headerScrollHandler(header)
        })
    },

    _headerScrollHandler(header){
        if (window.scrollY > 0) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }
}

export default HeaderInitiator