var slack = require('@slack/client');
var tba = require('thebluealliance')('jlmcmchl', 'TBCSlackClient', 'alpha');

const token = process.env.SLACK_API_TOKEN || '';

if (token == '')
{
  process.exit();
}

var stdAck = function(err, msg)
{
  if (err != null)
  {
    console.log(err);
  }
  else
  {
    console.log(msg);
  }
};

var rtm = new slack.RtmClient(
  token,
  {
    loglevel: 'debug',
    dataStore: new slack.MemoryDataStore()
  }
);

rtm.on(slack.CLIENT_EVENTS.RTM.AUTHENTICATED, function (rtmStartData)
  {
    console.log('Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}, but not yet connected to a channel');
  });

rtm.on(slack.CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, function (info) {
  rtm.sendMessage('I\'m Alive!', rtm.dataStore.getDMByName('jlmcmchl').id, stdAck);
});

rtm.on(slack.RTM_EVENTS.MESSAGE, function (msg)
{
  console.log(msg);
  if (msg.text == 'Jeeves')
  {
    rtm.sendMessage('Fuck off buddy', rtm.dataStore.getDMByName('jlmcmchl').id, stdAck);
  }
});

rtm.on(slack.RTM_EVENTS.ACCOUNTS_CHANGED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.BOT_ADDED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.BOT_CHANGED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.CHANNEL_ARCHIVE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.CHANNEL_CREATED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.CHANNEL_DELETED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.CHANNEL_HISTORY_CHANGED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.CHANNEL_JOINED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.CHANNEL_LEFT, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.CHANNEL_MARKED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.CHANNEL_RENAME, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.CHANNEL_UNARCHIVE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.COMMANDS_CHANGED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.DND_UPDATED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.DND_UPDATED_USER, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.EMAIL_DOMAIN_CHANGED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.EMOJI_CHANGED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.FILE_CHANGE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.FILE_COMMENT_ADDED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.FILE_COMMENT_DELETED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.FILE_COMMENT_EDITED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.FILE_CREATED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.FILE_DELETED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.FILE_PRIVATE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.FILE_PUBLIC, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.FILE_SHARED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.FILE_UNSHARED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.GROUP_ARCHIVE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.GROUP_CLOSE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.GROUP_HISTORY_CHANGED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.GROUP_JOINED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.GROUP_LEFT, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.GROUP_MARKED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.GROUP_OPEN, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.GROUP_RENAME, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.GROUP_UNARCHIVE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.HELLO, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.IM_CLOSE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.IM_CREATED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.IM_HISTORY_CHANGED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.IM_MARKED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.IM_OPEN, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.MANUAL_PRESENCE_CHANGE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.MPIM_CLOSE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.MPIM_HISTORY_CHANGED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.MPIM_JOINED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.MPIM_OPEN, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.PIN_ADDED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.PIN_REMOVED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.PREF_CHANGE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.PRESENCE_CHANGE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.REACTION_ADDED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.REACTION_REMOVED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.RECONNECT_URL, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.STAR_ADDED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.STAR_REMOVED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.SUBTEAM_CREATED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.SUBTEAM_SELF_ADDED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.SUBTEAM_SELF_REMOVED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.SUBTEAM_UPDATED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.TEAM_DOMAIN_CHANGE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.TEAM_JOIN, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.TEAM_MIGRATION_STARTED, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.TEAM_PLAN_CHANGE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.TEAM_PREF_CHANGE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.TEAM_PROFILE_CHANGE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.TEAM_PROFILE_DELETE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.TEAM_PROFILE_REORDER, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.TEAM_RENAME, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.USER_CHANGE, function (info) { console.log(info); });
rtm.on(slack.RTM_EVENTS.USER_TYPING, function (info) { console.log(info); });

rtm.start();
