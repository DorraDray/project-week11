"use client";

export default function Error({ error }) {
  return (
    <div>
      <h2>OH NO! It looks like there was an error thrown</h2>
      <p>{error.message}</p>
    </div>
  );
}
s;
