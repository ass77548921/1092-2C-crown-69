const db=require('../utils/database_69');

const clothing_69=class clothing_69 {
    constructor(id, name, cat_id, price, remote_url, local_url){
        this.id = id;
        this.name = name;
        this.cat_id = cat_id;
        this.price = price;
        this.remote_url = remote_url;
        this.local_url = local_url;
    }
    static fetchProduct(cid){
        return db.execute('SELECT* from clothing_69 where cat_id=?',[cid]);
    }
}

module.exports=clothing_69;