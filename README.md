This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

# 📱 React Native App

Este proyecto es una aplicación móvil desarrollada con **React Native** utilizando **TypeScript**, basada en **Context API** para la gestión de estado y **AsyncStorage** para almacenamiento persistente.

## 🚀 Características
- Listado de publicaciones de usuarios con paginación infinita.
- Almacenamiento en **AsyncStorage** para persistencia de datos.
- **Pull-to-refresh** para recargar datos manualmente.
- **Búsqueda en memoria** sin realizar nuevas solicitudes.
- Arquitectura modular y escalable con **Context API** y separación de responsabilidades.
- **Testing con Jest y React Testing Library**.

## 🛠️ Tecnologías
- **React Native CLI**
- **TypeScript**
- **Context API**
- **AsyncStorage**
- **Axios** para llamadas a API
- **Jest + React Testing Library** para pruebas unitarias


## 📂 Estructura del Proyecto
```plaintext
/src
 |-- components/       # Componentes reutilizables y test unitarios
 |-- context/          # Context API para la gestión de estado
 |-- screens/          # Pantallas principales y test unitario
 |-- services/         # Llamadas a la API y lógica de negocio
 |-- utils/            # Funciones auxiliares
 
```

## 🔧 Instalación y Configuración

### **1️⃣ Requisitos previos**
- Node.js >= 16
- npm o yarn
- React Native CLI
- Emulador Ios o Android

### **2️⃣ Clonar el repositorio**
```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd MyApp
```

### **3️⃣ Instalar dependencias**
```bash
npm install
# o con yarn
yarn install
```

### **4️⃣ Ejecutar en Android**
```bash
npx react-native run-android
```

### **5️⃣ Ejecutar en iOS (MacOS con Xcode)**
```bash
npx pod-install
npx react-native run-ios
```

### **6️⃣ Configuración de Reactotron (Opcional, solo en desarrollo para debuggin)**
Si deseas usar **Reactotron** para debugging: 

**1.Crear ReactotronConfig.js
Crea un archivo en la raíz del proyecto llamado ReactotronConfig.js con el siguiente contenido:
```tsx
const reactotron = Reactotron.configure({ host: 'localhost' }) // Asegúrate de que esté en la misma red que tu dispositivo/emulador
  .useReactNative()
  .connect();

console.tron = reactotron.log;
export default reactotron;
```
***2.Importar en`App.tsx` (solo en desarrollo):
```tsx
if (__DEV__) {
  require("./ReactotronConfig");
}
```
***Ejecutar Reactotron
Antes de iniciar la aplicación, abre Reactotron en tu computadora y luego ejecuta tu app:
```bash
npx react-native run-android  # Para Android
npx react-native run-ios      # Para iOS
```
---

## ✅ Pruebas Unitarias
Ejecuta las pruebas con Jest:
```bash
npm test
```
Ejecutar pruebas en modo watch:
```bash
npm test -- --watch
```
---

## 📖 Estándares de Código
- Sigue las reglas de **ESLint y Prettier**.
- Nombres de archivos en `camelCase` para componentes (`MyComponent.tsx`).
- Uso de `React.FC` y `useState/useEffect` en vez de clases.
- Código modular y reutilizable.

---
