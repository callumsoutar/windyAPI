const options = {
    key: '1I6lLiqgpo5krbQMdhnTmLX3zJtKzMGT', 
    lat: 50.4,
    lon: 14.3,
    zoom: 5,

    timestamp: Date.now() + 3 * 24 * 60 * 60 * 1000,

    hourFormat: '12h',

    // ...etc
};

windyInit(options, windyAPI => {
    const { store } = windyAPI;

    const levels = store.getAllowed('availLevels');
    // levels = ['surface', '850h', ... ]

    let i = 0;
    setInterval(() => {
        i = i === levels.length - 1 ? 0 : i + 1;

        // Changing Windy params at runtime
        store.set('level', levels[i]);
    }, 500);

    // Observing change of .store value
    store.on('level', level => {
        console.log(`Level was changed: ${level}`);
    });
});
