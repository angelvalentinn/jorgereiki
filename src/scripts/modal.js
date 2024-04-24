document.addEventListener('astro:page-load', () => {
    
    const btnModal = document.querySelectorAll('.abrir-modal');
    const modales = document.querySelectorAll('.modal-container');
    const closeModal = document.querySelectorAll('.close-modal');

    btnModal?.forEach(btn => {
        
        btn.addEventListener('click', () => {

            modales.forEach(modal => {
                
                if(btn.ariaLabel == modal.id) {
                    document.body.style.overflow = 'hidden'
                    modal.style.display = 'block';
                    modal.classList.add('fade-in-bck');
            
                    setTimeout(() => {
                        modal.classList.remove('fade-in-bck');
                    },500)

                }

            })

        })
    
    })

    closeModal?.forEach(btnClose => {

        btnClose.addEventListener('click', () => {

            modales.forEach(modal => {

                if(modal.id == btnClose.ariaLabel) {

                    document.body.style.overflow = 'auto';
                    modal.classList.add('fade-out-bck');
            
                    setTimeout(() => {
                        modal.style.display = 'none';
                        modal.classList.remove('fade-out-bck');
                    },500)

                }

            })

        })

    })

})