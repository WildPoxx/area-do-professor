# Verificacao local

Data: 2026-08-16

## Resultado

- Estrutura criada em `C:\Users\amari\source\GITS\GitHub - Docencia Geral\area-do-professor`.
- Pasta local sem `.git`.
- Vault `C:\Users\amari\source\Docencia Geral` tambem sem `.git`.
- Total da area local: 38 arquivos.
- HTMLs em `docs/`: 33.
- Decks copiados: 23.
- Decks com lamina final de transparencia de IA: 23.

## Links

Validador estatico de `href` local:

- resultado: todos os destinos locais existem;
- dependencia corrigida: `deck-html-teoria.css` foi copiado para a pasta dos
  slides de Teoria da Constituicao.

## Busca de risco

Busca nos decks copiados de Direito Constitucional por:

`gabarito`, `nota-professor`, `mostrar-gabarito`, `mostrar-notas`, `presenca`,
`matricula`, `cpf`, `e-mail`, `dados pessoais`.

Resultado:

- nenhum achado nos decks copiados.

Os unicos achados na area local estao nas paginas de IDPP que explicam por que
os decks dessa disciplina permanecem em curadoria.

## Links de paginas estudantis

Busca especifica por `area-do-professor` em:

- `C:\Users\amari\source\GITS\GitHub - Docencia Geral\direito-constitucional\docs`
- `C:\Users\amari\source\GITS\GitHub - Docencia Geral\idpp-unifamec\docs`

Resultado:

- nenhum link encontrado para a nova area.

Observacao: existe no site `idpp-unifamec` uma rota antiga intitulada "area do
professor", mas ela nao aponta para este novo projeto.

## Browser

Validacao headless feita com Google Chrome local via Playwright:

- home abriu com titulo `Area do Professor - Mario Bastos`;
- home exibiu 2 cards de curso;
- deck `Teoria da Constituicao - Modulo 1` abriu com 11 slides;
- a lamina `Declaracao de uso de IA generativa` foi localizada no deck.

## Fora do escopo desta etapa

- `git init`
- commit
- push
- remote
- workflow
- GitHub Pages
- publicacao

