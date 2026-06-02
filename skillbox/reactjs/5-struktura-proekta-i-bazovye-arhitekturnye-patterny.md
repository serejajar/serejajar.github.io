Проверил вашу работу. Вам плюсик за правильное разделение компонентов на бизнес и UI и отдельный плюс за лаконичную реализацию хука useRestaurantListQuery. Работа выполнена на отлично!
ДЗ принято.

Что можно улучшить
- Loader, Logo и другие простые компоненты не имеющие бизнес-логику это скорее компоненты и их лучше переместить в папку с компонентами.
- useRestaurantListQuery можно сделать проще и убрать state, useEffect, так как useQuery имеет свой внутренний state:
export const useRestaurantListQuery = () => {
	const restaurantListQuery = useQuery(
		{
			queryFn: () => getRestaurants(),
			queryKey: ['restaurants'],
		},
		queryClient,
);

    return restaurantListQuery;
};

И вот так этот state можно использовать
export const Main = () => {
	const [searchQuery, setSarchQuery] = useState<string>('');
	const [isChangeRating, setIsChangeRating] = useState<boolean>(false);
    const restaurantListQuery = useRestaurantListQuery();

    useEffect(() => {
        restaurantListQuery.refetch();
    }, [isChangeRating]);

	const handleChangeRating = () => {
		setIsChangeRating((prev) => !prev);
	};

	return (
		<main className="main">
			{(restaurantListQuery.isLoading ||
				restaurantListQuery.isPending) && <Loader />}
			{restaurantListQuery.isSuccess && (
				<>
					<SearchRestaurant onFilter={setSarchQuery} />
					<RestaurantListView
						restaurantList={restaurantListQuery.data}
						searchQuery={searchQuery}
						changeRating={handleChangeRating}
					/>
				</>
			)}
		</main>
	);
};

PS: Если у вас появятся вопросы по этому ДЗ, то вы их можете задать в чате следующего модуля.
