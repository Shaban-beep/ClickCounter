function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in props) {
        if (prop === 'children') continue; 
            domElement.setAttribute(prop, reactElement.props[prop])
        }
    container.appendChild(domElement)
}
const reactElement = {
    type: 'a',
    prop: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)