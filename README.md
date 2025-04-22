# scrapeamazon

Projeto criado para aplicação da vaga Junior Full Stack Developer da Carvalho Aleixo Inc

## Backend

A API recebe uma palavra-chave via query string ?keyword=.

Usamos axios para pegar o conteúdo HTML da página de busca da Amazon.

Com o JSDOM, extraímos o título, avaliação, número de reviews e a URL da imagem de cada produto.

A resposta é enviada em formato JSON.
