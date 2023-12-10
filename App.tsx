import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';
import { AppProvider } from './src/context/app.context';

const queryClient = new QueryClient();

/**
 * Renders the root component of the application.
 *
 * @return {React.ReactElement} The rendered root component.
 */
export default function App(): React.ReactElement {
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
