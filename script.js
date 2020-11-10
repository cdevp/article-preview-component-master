    document.getElementById('arrow-background').addEventListener('click', () => {
        if (document.getElementById('social-links').style.display === 'none' ||
            document.getElementById('social-links').style.display === '') {
                document.getElementById('social-links').style.display = 'flex';
                document.getElementById('arrow-background').style.backgroundColor = 'hsl(214, 17%, 51%)';
                document.getElementById('arrow').style.display = 'none';
                document.getElementById('white-arrow').style.display = 'flex';
        }

        else {
            document.getElementById('social-links').style.display = 'none';
            document.getElementById('arrow-background').style.backgroundColor = 'hsl(210, 46%, 95%)';
            document.getElementById('arrow').style.display = 'flex';
            document.getElementById('white-arrow').style.display = 'none';
        }
    });
    document.getElementById('mobile-arrow-background').addEventListener('click', () => {
        if (document.getElementById('mobile-social-links').style.display === 'none' ||
            document.getElementById('mobile-social-links').style.display === '') {

            document.getElementById('mobile-social-links').style.display = 'flex';
            document.getElementById('mobile-arrow-background').style.backgroundColor = 'hsl(214, 17%, 51%)';
            document.getElementById('mobile-arrow').style.display = 'none';
            document.getElementById('mobile-white-arrow').style.display = 'flex';
            document.getElementById('whitespace').style.display = 'none';
        }
        else {
            
            document.getElementById('mobile-social-links').style.display = 'none';
            document.getElementById('mobile-arrow-background').style.backgroundColor = 'hsl(210, 46%, 95%)';
            document.getElementById('mobile-arrow').style.display = 'flex';
            document.getElementById('mobile-white-arrow').style.display = 'none';
            document.getElementById('whitespace').style.display = 'flex';
        }
    });