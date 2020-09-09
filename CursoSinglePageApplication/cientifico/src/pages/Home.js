import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();
    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <articles class="Character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </articles>
            `).join('')}  
        </div>
    `;
    return view;
};
// USAMOS .join('') para unir cada una de la iteraciones del template y que no use ninguna forma de separarlos

export default Home;