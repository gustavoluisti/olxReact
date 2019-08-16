
const OlxAPI = {

    getProducts:(limit = 10) => {
        return new Promise((resolve, reject) => {

            setTimeout(function() {
                const array = [
                    {title: 'Produto 1'},
                    {title: 'Produto 2'},
                    {title: 'Produto 3'}
                ];

                resolve(array);
            }, 3000);
        });
    }
};

export default OlxAPI;