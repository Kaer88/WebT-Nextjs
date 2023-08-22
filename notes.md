- Nextjs: elsődlegesen frontend framework, backend képességekkel
- Server side rendering: 
    - Gyorsabb oldalbetöltés, kisebb bundle kliens oldalon 
    - SSR működés: 

        - NextJs frontend oldalon legenerálja a HTML-t és csak azt küldi
        - Nextjs elcacheli a generált html-t 
        - a html csomag klienshez való megérkezése után betölt a html bundle, ami 
            - ez "hidratálja" a kliens oldali interaktív komponenseket 
            -   

    - API hívásokat nem kell kiküldeni a frontend oldali kódra, hanem SSR-el 
        lekérjük az adatot és már az adattal küldött HTML-t küldjük 
        -   serverless API routes

    - pages.js -- metadata: fejléc mellett itt lehet állítani tageket az oldalakhoz, amik SEO szempontból k. fontosak 