-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2018. Jún 28. 17:59
-- Kiszolgáló verziója: 10.1.28-MariaDB
-- PHP verzió: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `munkahely`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `dolgozok`
--

CREATE TABLE `dolgozok` (
  `dolgazon` int(11) NOT NULL,
  `nev` varchar(50) COLLATE utf8_bin NOT NULL,
  `irszam` varchar(4) COLLATE utf8_bin NOT NULL,
  `varos` varchar(30) COLLATE utf8_bin NOT NULL,
  `utca` varchar(30) COLLATE utf8_bin NOT NULL,
  `dkezd` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- A tábla adatainak kiíratása `dolgozok`
--

INSERT INTO `dolgozok` (`dolgazon`, `nev`, `irszam`, `varos`, `utca`, `dkezd`) VALUES
(1, 'Varga Kata', '1113', 'Budapest', 'Virág út 8.', '2005-01-02'),
(2, 'Csabai Kinga', '3300', 'Eger', 'Váci út 111.', '2005-01-20'),
(3, 'Nagy László', '1107', 'Budapest', 'Forint u. 51.', '2005-01-20'),
(4, 'Vígh Elek', '3525', 'Miskolc', 'Ló u. 1.', '2005-06-01'),
(5, 'Kiss Éva', '1112', 'Budapest', 'Darázs u. 12.', '2005-06-01'),
(6, 'Kincses Nóra', '8360', 'Keszthely', 'Venyige u. 83.', '2005-06-01'),
(7, 'Pongrác Péter', '9999', 'Csillagkút', 'Fő u. 34.', '2005-06-01'),
(8, 'Aba Sámuel', '3525', 'Miskolc', 'Nagy Lajos király út 44.', '2007-02-01'),
(9, 'Faragó Roland', '5008', 'Szolnok', 'Petőfi tér 2.', '2007-02-01'),
(10, 'Zala Zoltán', '5008', 'Szolnok', 'Petőfi tér 5.', '2007-03-01'),
(11, 'Erdei Nóra', '6726', 'Pécs', 'Kossuth L. u. 43.', '2007-03-01'),
(12, 'Kerekes Kelemen', '8360', 'Keszthely', 'Boróka köz 3.', '2007-05-15'),
(13, 'Tóth Máté', '1111', 'Budapest', 'Etele tér 12.', '2007-09-10'),
(14, 'Révész Ibolya', '3300', 'Eger', 'Dobó tér 1.', '2007-09-10'),
(15, 'Ridegh Béla', '3525', 'Miskolc', 'Tímár u. 8.', '2007-09-10'),
(16, 'Kiss Éva', '6400', 'Kiskunhalas', 'Petőfi út 71.', '2008-03-01'),
(17, 'Dobó Mátyás', '7100', 'Szekszárd', 'Malom u. 11.', '2008-03-01');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jutalmak`
--

CREATE TABLE `jutalmak` (
  `dolgkod` int(11) NOT NULL,
  `jdatum` date NOT NULL,
  `jutalom` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- A tábla adatainak kiíratása `jutalmak`
--

INSERT INTO `jutalmak` (`dolgkod`, `jdatum`, `jutalom`) VALUES
(1, '2010-03-01', 50000),
(1, '2010-09-01', 40000),
(1, '2010-12-20', 40000),
(1, '2013-09-01', 20000),
(2, '2010-12-20', 40000),
(2, '2012-10-01', 50000),
(3, '2010-03-01', 60000),
(3, '2010-09-01', 30000),
(3, '2012-10-01', 20000),
(4, '2010-12-20', 50000),
(5, '2012-10-01', 30000),
(5, '2013-04-01', 30000),
(5, '2013-09-01', 30000),
(6, '2013-04-01', 40000),
(10, '2013-04-01', 20000),
(10, '2013-09-01', 50000),
(15, '2013-09-01', 40000);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `dolgozok`
--
ALTER TABLE `dolgozok`
  ADD PRIMARY KEY (`dolgazon`);

--
-- A tábla indexei `jutalmak`
--
ALTER TABLE `jutalmak`
  ADD PRIMARY KEY (`dolgkod`,`jdatum`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `dolgozok`
--
ALTER TABLE `dolgozok`
  MODIFY `dolgazon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `jutalmak`
--
ALTER TABLE `jutalmak`
  ADD CONSTRAINT `jutalma` FOREIGN KEY (`dolgkod`) REFERENCES `dolgozok` (`dolgazon`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
