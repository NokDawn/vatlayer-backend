# vatlayer-backend

# Uruchomienie projektu

1. Klonujemy repozytorium za pomocą git clone
2. Otwieramy projekt
3. W głównym folderze instalujemy paczki za pomocą `npm install`
4. Tworzymy plik `.env` w głównym folderze, z następującymi zmiennymi

NODE_ENV=TUTAJ_WSTAW_ZMIENNĄ\
COOKIE_KEY_ONE=TUTAJ_WSTAW_ZMIENNĄ\
COOKIE_KEY_TWO=TUTAJ_WSTAW_ZMIENNĄ\
CLIENT_URL=TUTAJ_WSTAW_ZMIENNĄ\

5. Uruchamiamy projekt za pomocą komendy `npm run dev`

# Potencjalne problemy z uruchomieniem

Jeżeli wystąpi problem z uruchomieniem projektu, możliwe jest, że nie masz zainstalowego środowiska uruchomieniowego - nodemon'a. W takim przypadku można zainstalować go globalnie za pomocą `npm install -g nodemon` lub odpalić skrypt `npm run node:dev`, który korzysta prosto z node'a.

Jeżeli nie są podane zmienne środowiskowe, projekt wyrzuci błąd. Wszystkie wyżej wymienione zmienne muszą być podane w pliku `.env`. W razie braku którejś ze zmiennych, zostanie wyrzucony odpowiedni błąd w konsoli.
