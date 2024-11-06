View the deployed app on vercel over here - https://monitoring-app-chi.vercel.app

## Getting Started

Install dependencies

```bash
npm i
```

Run the app locally

```bash
npm run dev
```

## Limitations

- The colors for the severity label could be improved, some of them are too similar and makes it hard to differentiate at a quick glance
- Table column `time` should ideally be a sortable column
- Limitations on the histogram:
  - It groups the data in a hard coded way (by day)
  - It doesn't indicate missing data for a given date, instead skips to the next data with available data
  - Ideally this graph should be a multi series graph such that each bar shows counts of distinct severity within it in different color 
- Limitations on Table:
  - The Table row doesn't show any more detail about the log record it shows upon clicking. This functionality is not implemented
  - The table should adjust its width with bigger screen sizes to be better aligned with the histogram
