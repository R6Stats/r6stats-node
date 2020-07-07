Please note that any changes to the API data itself will be reflected in the R6Stats API documentation. The notes here only reflect changes in the structure of the responses or the client library itself.

# 4.0.0-alpha1

* Added `primary_color`, `ranks` and `season` to seasonal responses
* Added `claimed` boolean to API responses, determining if a player has been claimed by a user
* The seasonal response now uses an array of seasons, rather than keyed by the name of the season
* Added `bust_image` and `figure_image` to operator stats
* All API responses are now wrapped in a root `{ data: ... }` object
* Replace `StatsLookup` with a `...(username: string, platform: Platform)` call. Platform is a TypeScript type allowing for `pc`, `xbox`, or `ps4`. 

# 3.0.6

* Fix type exports

# 3.0.1

* Fix generic stats URL
