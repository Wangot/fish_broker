var path = require('path');
const PER_PAGE = 2;

exports.pagination = function(filter, query){
    var clonObj = filter;
    var limit = PER_PAGE;
    var offset = 0;
    if(query.perPage){
        limit = query.perPage;
    }

    if(query.page && query.page > 0){
        offset = (query.page - 1) * limit;
    } else {
        query.page = 1;
    }
    
    filter.where[0] += ' LIMIT ? OFFSET ?';
    filter.where.push(parseInt(limit));
    filter.where.push(parseInt(offset));
    return clonObj;
}

exports.paginationObject = function(filter, query){
    filter.offset = 0;

    if(query.orderBy){
        var sortBy = 'ASC';
        if(query.sortBy) sortBy = query.sortBy;
        filter.order = [[query.orderBy, sortBy]];
    }

    if(query.perPage){
        filter.limit = query.perPage;
    } else{
        filter.limit = query.perPage = PER_PAGE;
    }

    if(query.page || query.page > 0){
        filter.offset = (query.page - 1) * filter.limit;
    } else {
        query.page = 1;
    }

    if(query.page == 0){
        delete filter.limit;
        delete filter.offset;
        delete query.page;
        delete query.perPage;
    }
}

exports.search = function(filter, query, attributes){
    if(typeof filter.where == 'undefined') filter.where = {};

    for(var key in query){
        // console.log(key, query[key]);
        if(attributes.indexOf(key) > 0 && query[key] != ""){
            filter.where[key] = {
                    $like: "%"+ query[key] +"%"
                }
        }
    }
}