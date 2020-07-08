import React, { useCallback } from 'react';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const { addToast } = useToast();

  const handleSignOut = useCallback(async () => {
    try {
      signOut();
      await addToast({
        type: 'success',
        title: 'Logout efetuado com sucesso',
        description: 'Saindo...',
      });
    } catch (error) {
      await addToast({
        type: 'error',
        title: 'Erro no logout',
        description: 'Ocorreu um erro ao fazer logout.',
      });
    }
  }, [addToast, signOut]);

  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={handleSignOut}>Logout</Button>
    </>
  );
};

export default Dashboard;
