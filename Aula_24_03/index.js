import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


/* 
1. Arquitetura: O "Bridge" vs. Novo Modelo (Fabric)

Historicamente, o React Native funcionava através de uma Bridge (Ponte). Imagine dois mundos que falam línguas diferentes: o JavaScript e o Nativo (Java/Kotlin ou Objective-C/Swift).

    A Ponte (Legacy): O código JS e o código Nativo se comunicavam enviando mensagens JSON assíncronas através dessa ponte.

    JSI (JavaScript Interface): Na arquitetura moderna, a ponte está sendo substituída pelo JSI, que permite que o JavaScript tenha uma referência direta aos objetos nativos, tornando a comunicação muito mais rápida.

2. Renderização: Virtual DOM para Native Views

No React para web, o Virtual DOM é mapeado para elementos HTML (<div>, <span>). No React Native, ele é mapeado para Native Views (componentes nativos da plataforma).

    Quando você usa um <Text>, o React Native instrui o sistema operacional a renderizar uma TextView no Android ou uma UITextView no iOS.

    Isso garante que o aplicativo tenha a performance e a aparência de um app desenvolvido da forma tradicional.

3. O Ciclo de Threading

O React Native gerencia basicamente três threads principais para manter a interface fluida:

    Main Thread (UI Thread): Onde a renderização nativa acontece e as interações do usuário (toques) são processadas.

    JavaScript Thread: Onde o seu código lógico é executado e onde as decisões de negócio do app acontecem.

    Shadow Thread: Um passo intermediário que calcula o layout (usando uma engine chamada Yoga) antes de enviar as posições exatas dos elementos para a Main Thread.

4. JSX e Componentização

Assim como no React para Web, a base é a componentização. Você divide sua interface em pequenas peças reutilizáveis.

    JSX: Uma extensão de sintaxe que permite escrever algo parecido com XML dentro do JavaScript.

    Props e State: O fluxo de dados segue a mesma lógica — Props são configurações passadas de pai para filho, e State é a memória interna do componente que, ao mudar, dispara uma re-renderização.

5. Hot Reloading e Fast Refresh

Diferente do desenvolvimento nativo tradicional (onde você precisa recompilar o app inteiro a cada mudança), o React Native utiliza o Fast Refresh.
Ele injeta o código modificado diretamente no bundle de JavaScript em tempo real, preservando o estado do componente sempre que possível. Isso acelera drasticamente a produtividade.
6. Ecossistema: Expo vs. CLI

Ao estudar a teoria, você encontrará dois caminhos para iniciar:

    Expo: Um conjunto de ferramentas e serviços construídos em cima do React Native que facilita o acesso a APIs nativas (câmera, notificações, sensores) sem precisar mexer em código nativo complexo.

    React Native CLI: A abordagem "pura", onde você tem controle total sobre as pastas /android e /ios, necessária para projetos que exigem customizações nativas muito específicas.

Qual desses conceitos você gostaria de aprofundar primeiro para o seu aprendizado? */