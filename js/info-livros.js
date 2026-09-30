import livrosRecente from "../Banco.js";


document.addEventListener("DOMContentLoaded", () => {
    const ID = localStorage.getItem('livroID');
    const TABELA = document.querySelectorAll('.tabela');
    const usuarioItem = livrosRecente.find(usuario => usuario.id === parseInt(ID));

    TABELA.forEach(TABELA => {
        TABELA.innerHTML = ` <!-- Informações principais -->
            <div class="lg:flex grid gap-5 mb-10 lg:grid-cols-2 grid-rows-2">

                <img
                    src="${usuarioItem.src}"
                    alt="Livro"
                    class="w-56 h-72 object-cover border "
                >

                <div class="flex-1">
                    <h1 class="text-4xl font-bold mb-6">
                        ${usuarioItem.titulo}
                    </h1>

                    <p class="text-gray-700 leading-relaxed">
                        ${usuarioItem.resumo}
                    </p>
                </div>

            </div>

            <!-- Tabela -->
            <div class="border border-red-600">

                <div class="grid grid-cols-[180px_1fr] border-b border-red-600">
                    <div class="p-2 border-r border-red-600">Autor</div>
                    <div class="p-2">${usuarioItem.autor}</div>
                </div>

                <div class="grid grid-cols-[180px_1fr] border-b border-red-600">
                    <div class="p-2 border-r border-red-600">Gênero</div>
                    <div class="p-2">${usuarioItem.genero}</div>
                </div>

                <div class="grid grid-cols-[180px_1fr] border-b border-red-600">
                    <div class="p-2 border-r border-red-600">Descrição</div>
                    <div class="p-2">
                        ${usuarioItem.descricao}
                    </div>
                </div>

                <div class="grid grid-cols-[180px_1fr] border-b border-red-600">
                    <div class="p-2 border-r border-red-600">Ano</div>
                    <div class="p-2">${usuarioItem.ano}</div>
                </div>

                <div class="grid grid-cols-[180px_1fr] border-b border-red-600">
                    <div class="p-2 border-r border-red-600">Páginas</div>
                    <div class="p-2">${usuarioItem.paginas}</div>
                </div>

                <div class="grid grid-cols-[180px_1fr] border-b border-red-600">
                    <div class="p-2 border-r border-red-600">${usuarioItem.condicao}</div>
                    <div class="p-2">Usado</div>
                </div>

                <div class="grid grid-cols-[180px_1fr] border-b border-red-600">
                    <div class="p-2 border-r border-red-600">Editora</div>
                    <div class="p-2">${usuarioItem.editora}</div>
                </div>

                <div class="grid grid-cols-[180px_1fr] border-b border-red-600">
                    <div class="p-2 border-r border-red-600">ISBN</div>
                    <div class="p-2">${usuarioItem.isbn}</div>
                </div>

                <div class="grid grid-cols-[180px_1fr] border-b border-red-600">
                    <div class="p-2 border-r border-red-600">Idioma</div>
                    <div class="p-2">${usuarioItem.idioma}</div>
                </div>

                <div class="grid grid-cols-[180px_1fr] border-b border-red-600">
                    <div class="p-2 border-r border-red-600">Dimensão</div>
                    <div class="p-2">${usuarioItem.dimensao}</div>
                </div>

                <div class="grid grid-cols-[180px_1fr] border-b border-red-600">
                    <div class="p-2 border-r border-red-600">Classificação</div>
                    <div class="p-2">${usuarioItem.classificacao}</div>
                </div>

                <!-- Estatísticas -->
                <div class="grid 2xl:grid-cols-4 grid-rows-2 text-center py-3 text-sm">
                    <div>Exemplares: 10</div>
                    <div>Emprestados: 3</div>
                    <div>Reservados: 1</div>
                    <div>Disponíveis: 7</div>
                </div>

            </div>
`;
    });
});
