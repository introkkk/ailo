# Overview

## Architecture

The project is mainly divided into three layers: shell, service, view.

## Tech Stack

- Shell: Electron, JavaScript, Node.js (type: module), gRPC, npm
- Service: Python, gRPC, uv
- View: React, JavaScript, Tailwind CSS, Vite

# Commands

## Running in development mode

### 1. Start Vite development server

```shell
npm run dev:vite
```

### 2. Launch Electron in development mode

```shell
npm run dev:electron
```

## Formatting

```shell
npm run format
```

# Git Commit

- Use Conventional Commits: `<type>(<scope.sub-scope>): <summary>` (`scope` and `sub-scope` are optional).
- Run formatting (`npm run format`) before committing.

# Deployment

## 1. Set up the Node.js environment

|  Tool   | Version |
| :-----: | :-----: |
| Node.js | 24.17.0 |
|   npm   | 11.13.0 |

```shell
npm install
```

## 2. Set up the Python environment

```shell
uv sync
```
