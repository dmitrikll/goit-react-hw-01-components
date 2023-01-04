import { user, data, friends, transactions } from 'utils/allData';
import { Profile, Statistics, FriendList, TransactionHistory } from 'utils/allComponents';

export const App = () => {
  return (
    <div>

      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />

    </div>
  );
};
