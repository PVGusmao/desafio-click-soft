import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';
import { AppProvider } from './src/context/app.context';

const queryClient = new QueryClient();

export default function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppRoutes />
          <Toast />
        </NavigationContainer>
      </QueryClientProvider>
    </AppProvider>
  );
}
