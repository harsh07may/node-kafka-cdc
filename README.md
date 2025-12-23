# User → Search Index - CDC/Outbox Pattern

This project has two projects:

- UserService
    - Owns users table

- SearchService
    - Maintains user_search_index (denormalized)


## Flow

- User created / updated
- Change propagated to SearchService
- SearchService never writes back

## Event flow (no tech yet)

- User state changes
- Change becomes an event
- SearchService consumes event
- SearchService updates index