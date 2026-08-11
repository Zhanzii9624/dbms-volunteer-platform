# Volunteer Matching Platform

This project was completed between April and June 2023 as my sophomore final project. It is a volunteer matching platform built with Spring Boot, MySQL, and Spring Data JPA to demonstrate full database management workflows on MySQL.

## Overview

The system is designed to support volunteer activity browsing, searching, registration, favorites, and review workflows. It also includes login and role-based access control for volunteers, organizations, and supervisors.

The main purpose of this project is to demonstrate CRUD operations and database management on MySQL through a web application.

## Features

- User login and registration
- Role-based access for volunteers, organizations, and supervisors
- Volunteer activity browsing
- Activity search by fee range, date range, and keyword
- Activity registration and cancellation
- Favorite and unlike activities
- Activity creation, editing, and review
- Organization and supervisor management pages
- MySQL-backed persistence using Spring Data JPA and Hibernate

## Tech Stack

- Java 17
- Spring Boot 3.2.5
- Spring Data JPA / Hibernate
- Spring Security
- Thymeleaf
- MySQL
- Gradle

## Database

The application connects to a local MySQL database named `platform`.

To avoid hardcoding credentials in the repository, set these environment variables before starting the app:

- `DB_USERNAME`
- `DB_PASSWORD`

If not set, the application defaults to `root` and an empty password.

## How to Run

1. Install and start MySQL.
2. Create the `platform` database.
3. Set `DB_USERNAME` and `DB_PASSWORD`.
4. Run the project from the repository root:

```bash
gradlew.bat bootRun
```

5. Open the application in your browser:

```text
http://localhost:8080/login
```

## Notes

- JPA will automatically create or update tables based on the Entity classes.
- The data for events, registrations, favorites, and user accounts is stored in the local MySQL `platform` schema.
- GitHub uploads should exclude build output folders such as `build/` and `bin/`.

## 中文簡介

這是一個 2023 年 4 到 6 月完成的大二期末專案，主題是志工媒合平台。專案使用 Spring Boot、MySQL 與 Spring Data JPA 建置，主要用來展示 MySQL 資料庫管理的完整操作流程，包括新增、查詢、修改與刪除。平台提供志工活動瀏覽、搜尋、報名、收藏，以及組織端與審核端的管理功能。

個人分工: volunteer志工角色功能(修改個人資料、查看活動詳情頁、報名與收藏活動)、舉辦方角色審核申請功能、註冊登入功能、前後端連接
