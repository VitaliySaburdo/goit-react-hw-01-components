import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics'
import { FriendList } from './FriendList/FriendList'
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import Section from './Statistics/Section'
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json'

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats">
      <Statistics stats={data} />
      </Section>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
