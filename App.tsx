import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppRoutes />
        <Toast />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
