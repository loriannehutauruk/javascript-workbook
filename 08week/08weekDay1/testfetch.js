'use strict'

const assert = require('assert');


const getPost = (fetch,id,key) => {
    return fetch ('https://randomuser.me/api/'+id + '?key='+key);
}



if (typeof describe === 'function') {


describe('#Test Fetch',()=>{
    let count = 0;

    const Fakefetch = (url) =>
    {
        //for third test you need to split by ? so that you can get the key separate from the url
        const arr =url.split('/');
        let id = Number([arr.length-1])
        if (id<=0 || id>30)
            return 'Out of range'
        else
            return url;
    }
    //for the first test you need to compare the address
    it('Miss typed address,',()=>{
        assert.equal(getPost(Fakefetch, 15), 'https://randomuser.me/api/15')
    });
    //second test checks that the id is not beyond a certain value
    it('Out of range',()=>{
        assert.equal(getPost(Fakefetch, 31), 'Out of range');
    });
    //for third test check if the key is the same as the default value. THIS IS WHERE YOU LEFT
})

} else {

}


