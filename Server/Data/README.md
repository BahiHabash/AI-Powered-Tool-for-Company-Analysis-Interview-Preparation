# Project Data Management

## Directory Structure

```
/Data
 ├── /data
 │   ├── companies-row.json
 │   ├── companies.json
 │
 ├── /dev-scripts
 │   ├── drop.js
 │   ├── clean.js
 │   ├── import.js
```

## File Descriptions

| File/Directory       | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| `companies-row.json` | Raw data collected from [StackInfo](https://stackinfo.me/) |
| `companies.json`     | Cleaned data after processing raw data                     |
| `/dev-scripts`       | Directory containing scripts for data management           |

## Scripts

| Script      | Description                        | Directory                   | Execution Command |
| ----------- | ---------------------------------- | --------------------------- | ----------------- |
| `clean.js`  | Cleans raw data                    | `/Server/Data/dev-scripts/` | `node clean.js`   |
| `import.js` | Imports data into the database     | `/Server/Data/dev-scripts/` | `node import.js`  |
| `drop.js`   | Removes all data from the database | `/Server/Data/dev-scripts/` | `node drop.js`    |

Ensure you are in the correct directory before executing the scripts. 🚀
