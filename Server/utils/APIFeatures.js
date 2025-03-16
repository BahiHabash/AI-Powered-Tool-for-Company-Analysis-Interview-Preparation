class APIFeatures {
    constructor(queryDB, queryString) {
        this.queryDB = queryDB;
        this.queryString = queryString;
    }

    // Sorting
    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' '); // Convert "name,-createdAt" to "name -createdAt"
            this.queryDB = this.queryDB.sort(sortBy);
        }
        return this;
    }

    // Field Limiting (Projection)
    fields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' '); // Convert "name,logo,url" to "name logo url"
            this.queryDB = this.queryDB.select(fields);
        }
        return this;
    }

    // Pagination
    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 20;
        const skip = (page - 1) * limit;

        this.queryDB = this.queryDB.skip(skip).limit(limit);
        return this;
    }

    // Filtering
    filter() {
        const queryObj = { ...this.queryString };

        // exclude non-neccessary fields
        const excludedFields = ["sort", "fields", "page", "limit"];
        excludedFields.forEach((el) => delete queryObj[el]);

        // handle nested fields search
        const nestedFields = ['stacks', 'progLangs', 'frontend', 'backend', 'industry'];
        for (const nestedField of nestedFields) {
            if (queryObj[nestedField]) {
                queryObj[nestedField] = { $in: queryObj[nestedField].split(',') };
            }
        }

        // Search in the `socialMedia` map
        if (queryObj.socialMedia) {
            const socialKeys = queryObj.socialMedia.split(',');
            
            queryObj.$or = socialKeys.map(socialKey => ({ [`socialMedia.${socialKey}`]: { $exists: true } }));
            
            delete queryObj.socialMedia; // Remove original key
        }


        // Convert query operators (e.g., ?price[gte]=10) to MongoDB syntax
        const queryStr = JSON
            .stringify(queryObj)
            .replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        // apply the query search
        this.queryDB = this.queryDB.find( JSON.parse(queryStr) );

        return this;
    }

}

module.exports = APIFeatures;
