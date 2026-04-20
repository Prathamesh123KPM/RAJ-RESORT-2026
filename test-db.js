import Database from 'better-sqlite3';

try {
    const db = new Database(':memory:');
    db.prepare('CREATE TABLE test (name TEXT)').run();
    db.prepare('INSERT INTO test (name) VALUES (?)').run('Success');
    const result = db.prepare('SELECT name FROM test').get();
    
    if (result && result.name === 'Success') {
        console.log('BETTER_SQLITE3_TEST_PASSED');
    } else {
        console.error('BETTER_SQLITE3_TEST_FAILED: Unexpected result', result);
        process.exit(1);
    }
} catch (err) {
    console.error('BETTER_SQLITE3_TEST_FAILED:', err.message);
    process.exit(1);
}
