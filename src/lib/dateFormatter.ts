export const formatDate = (dateString: string) => {
  const date = new Date(dateString).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return date;
};
