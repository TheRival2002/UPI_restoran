# UPI_restoran

Kod kloniranja projekta, napravite ```.env``` u root-u projekta po uzoru na ```.env.example```.
Isto tako, napravite ```.env.local``` u ```fronted``` folder-u po uzoru na ```.env.local.example```.

## Instalacija aplikacije
### Root:
- ```npm install```

### Backend:
- ```cd backend```
- ```npm install```

### Frontend:
- ```cd frontend```
- ```npm install```

## Pokretanje aplikacije
### Backend:
- ```cd backend```
- ```npm run dev```

### Frontend:
- ```cd frontend```
- ```npm run dev```

Ili pokrenite sve odjednom iz root-a projekta:
- ```npm run dev```

## Izrada baze podataka
- instalirat postgresql sa njihove stranice, verzija 16.6
- unutar terminala pokrenuti postgresql
  - Linux: ```sudo service postgresql start```
  - Mac: ```brew services start postgresql```
  - Windows: ```pg_ctl -D "C:\Program Files\PostgreSQL\16\data" start``` ili ```net start postgresql-<version>``` (nisam siguran, to triba provjerit)
- spojiti se na postgresql
  - ```psql -U postgres```
  - kreirati svog korisnika ili možete nastaviti kao superuser
    - ```CREATE USER your_new_username WITH PASSWORD 'your_password';``` ili ako želite da ima superuser dopuštenja ```CREATE USER your_new_username WITH PASSWORD 'your_password' SUPERUSER;```
    - omogućiti privilegije korisniku ```GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_new_username;```
    - izaći iz postgresql-a i spojiti se kao novi korisnik ```psql postgres```
    - izvršiti naredbe iz ```database_schema.sql``` datoteke

ILI koristeći pgAdmin(verzija 8.14)

NAPOMENA: morate u .env datoteci postavit točne podatke za bazu podataka, također morate izraditi sve .env datokeke po uzore na njihove .example datoteke (npr. u frontend folder-u postoji .env.local.example, morate napravit .env.local datoteku)