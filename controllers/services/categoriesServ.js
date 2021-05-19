const category_69 = require("../../models/categoryModel_69")

exports.fetchCategories = async () => {
    try{
        const [rows] = await category_69.fetchAll();
    return rows;
    }catch(err){
        return {message: 'Error on getting data '}
    }
}