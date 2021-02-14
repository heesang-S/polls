import React from 'react';

const PollHeader = ({ title, onTitleChange, userId }) => (
  <div class="poll-header">
    <div class="poll-title">
      <input
        class="poll-title-input"
        value={title}
        placeholder="Title"
        onTitleChange={onTitleChange}
      />
    </div>
    <div class="poll-user">{userId}</div>
  </div>
);

const PollBody = ({ startDate, endDate, items, onItemContentChange, onItemAdd, onItemDelete }) => (
  <div class="poll-body">
    <div class="poll-dates">
      <span class="poll-startDate">{startDate}</span> ~ <span class="poll-endDate">{endDate}</span>
    </div>
    <div class="poll-items">
      {items.map((item) => (
        <div class="poll-item">
          <input type="text" placeholder="write an item" onChange={onItemContentChange} />
          <button onClick={onItemDelete}>-</button>
        </div>
      ))}
    </div>
    <div class="poll-item-add">
      <button onClick={onItemAdd}>+</button>
    </div>
  </div>
);

const PollFooter = ({ onPollSave, onPollDiscard }) => (
  <div class="poll-footer">
    <div class="poll-button-list">
      <button onPollDiscard={onPollDiscard}>Discard</button>
      <button onPollSave={onPollSave}>Save</button>
    </div>
  </div>
);

const Poll = ({ userId, title, startDate, endDate, items, onPollSave, onPollDiscard }) => {
  return (
    <div>
      <PollHeader title={title} userId={userId} onTitleChange={onTitleChange} />
      <PollBody
        startDate={startDate}
        endDate={endDate}
        items={items}
        onItemContentChange={onItemContentChange}
        onItemAdd={onItemAdd}
        onItemDelete={onItemDelete}
      />
      <PollFooter onPollSave={onPollSave} onPollDiscard={onPollDiscard} />
    </div>
  );
};

export default Poll;
