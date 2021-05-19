const db=require('../utils/database_69');

const category_69=class category_69 {
    constructor(id,name,size,remote_url,local_url){
        this.id=id;
        this.name=name;
        this.size=size;
        this.remote_url=remote_url;
        this.local_url=local_url;
    }

    static fetchAll(){
        return db.execute('SELECT * from category_69');
    }
}

module.exports=category_69;