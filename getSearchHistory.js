module.exports = () => {
    const history = ['tel aviv', 'gedera'];
    //code


    return {
        ok: true,
        status: 200,
        body: JSON.stringify(history)
    };
}