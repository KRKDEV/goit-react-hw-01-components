import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

import { Profile } from './profile/profile';
import { Statistics } from './statistics/stats';
import { FriendList } from './friends/friends';
import { TransactionHistory } from './transactions/transactions';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 20,
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
