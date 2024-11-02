const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.amazon.com.br/s?k=livros&crid=1H4QO69IXZ72B&sprefix=livto%2Caps%2C155&ref=nb_sb_ss_sc_1_5';

async function scrapeData() {
    try {
        const response = await axios.get(url); 
        const html = response.data; 
        const $ = cheerio.load(html);

        console.log('Status da requisição:', response.status === 200 ? 'Bem-sucedida' : 'Falha');
        
        // Use a more specific selector if necessary
        const tabelaStatus = $('.sg-col-inner'); 
        const tabelaNotificia = [];

        tabelaStatus.each(function () {
            // Adjust selectors based on actual HTML structure
            const Titulo = $(this).find('.a-size-mini.a-spacing-none.a-color-base.s-line-clamp-4').text().trim();
            const Autor = $(this).find('.a-size-base').text().trim();
            const preco = $(this).find('.a-offscreen').text().trim();
           
            // Check if the data is correctly extracted
            if (Titulo && Autor && preco) {
                tabelaNotificia.push({
                    Titulo,
                    Autor,
                    preco,
                });
            }
        });

        console.log('Posts extraídos:', tabelaNotificia);
    } catch (error) {
        console.error('Erro ao fazer scraping:', error);
    }
}

scrapeData();
