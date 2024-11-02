require('dotenv').config();
const nodamailer = require('nodemailer');


const transporter = nodamailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
})


async function sendEmail() {
    try{
        const info = await transporter.sendMail({
            from: `"Carla dos Santos" <${process.env.EMAIL_USER}>`,
            to: 'carla.romero.santos1@gmail.com',
            subject: 'Notícias de hoje sobre Livros', 
            html: `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        padding: 20px;
                    }
                    .container {
                        max-width: 600px;
                        margin: auto;
                        background: white;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        text-align: center;
                        color: #333;
                    }
                    .book {
                        border-bottom: 1px solid #ddd;
                        padding: 10px 0;
                        display: flex;
                        align-items: center;
                    }
                    .book img {
                        width: 100px;
                        height: auto;
                        margin-right: 20px;
                    }
                    .book-info {
                        flex-grow: 1;
                    }
                    .book-title {
                        font-size: 1.2em;
                        color: #0073e6;
                    }
                    .book-author {
                        font-size: 0.9em;
                        color: #555;
                    }
                    .book-price {
                        font-weight: bold;
                        color: #d9534f;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 20px;
                        font-size: 0.8em;
                        color: #777;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Descubra Novos Livros!</h1>
                    <div class="book">
                        <img src="LINK_DA_IMAGEM_DO_LIVRO_1" alt="Título do Livro 1">
                        <div class="book-info">
                            <a href="LINK_DO_LIVRO_1" class="book-title">Título do Livro 1</a>
                            <p class="book-author">Autor: Nome do Autor 1</p>
                            <p class="book-price">Preço: R$ XX,XX</p>
                        </div>
                    </div>
                    <div class="book">
                        <img src="LINK_DA_IMAGEM_DO_LIVRO_2" alt="Título do Livro 2">
                        <div class="book-info">
                            <a href="LINK_DO_LIVRO_2" class="book-title">Título do Livro 2</a>
                            <p class="book-author">Autor: Nome do Autor 2</p>
                            <p class="book-price">Preço: R$ XX,XX</p>
                        </div>
                    </div>
                    <!-- Adicione mais livros aqui -->
                    <div class="footer">
                        <p>Você está recebendo este e-mail porque se inscreveu em nossas notícias sobre livros.</p>
                    </div>
                </div>
            </body>
            </html>
            `,
        });
        

        console.log('E-mail enviado: %s', info.messageId);
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
      }
}

// Dispara o e-mail
sendEmail();