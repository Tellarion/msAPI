var myStat = require('msAPI');

console.log('test');

const APP_KEY = "6a56a5df2667e65aab73ce76d1dd737f7d1faef9c52e8b8c55ac75f565d8e8a6";
// o.authModel = new r.AuthModel("6a56a5df2667e65aab73ce76d1dd737f7d1faef9c52e8b8c55ac75f565d8e8a6")
// {"access_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbXNhcGkuaXRzdGVwLm9yZyIsImlhdCI6MTYwNDI2NDEzOSwiYXVkIjoxLCJleHAiOjE2MDQyNjc3MzksImFwaUFwcGxpY2F0aW9uSWQiOjEsImFwaVVzZXJUeXBlSWQiOjEsInVzZXJJZCI6Mzk0NiwiaWRDaXR5Ijo1Nn0.CzEwcZi7Ts2MekLKhdLGurW1msu3qUpGJHQpbwrsTmU","refresh_token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbXNhcGkuaXRzdGVwLm9yZyIsImlhdCI6MTYwNDI2NDEzOSwiYXVkIjoxLCJleHAiOjE2MDQyNjc3MzksImFwaUFwcGxpY2F0aW9uSWQiOjEsImFwaVVzZXJUeXBlSWQiOjEsInVzZXJJZCI6Mzk0NiwiaWRDaXR5Ijo1Nn0.CzEwcZi7Ts2MekLKhdLGurW1msu3qUpGJHQpbwrsTmU","expires_in_refresh":1604436939,"expires_in_access":1604267739,"user_type":1,"city_data":{"id_city":56,"prefix":"kdr","translate_key":"KRASNODAR","timezone_name":"Europe/Moscow","country_code":"RU/RUS","market_status":1,"name":"Краснодар"}}

var test = myStat.authStudent(APP_KEY, 56, "Dani_af75", "").then(data => {
    
    console.log(data);
    
    if(typeof data.access_token != 'undefined') {

        const access_token = data.access_token;

        // if get token, move
        myStat.getUserInfo(access_token).then(data2 => {
            console.log(data2);
            /* return data */
            /*
                groups: [ { group_status: 6, is_primary: true, id: 3235, name: 'БВ011' } ],
                student_id: 3946,
                current_group_id: 3235,
                full_name: 'Данилов Александр Валерьевич',
                achieves_count: 2,
                stream_id: 380,
                stream_name: 'СТ-3 Осень 2020',
                group_name: 'БВ011',
                level: 1,
                photo: 'https://fsx1.itstep.org/api/v1/files/fpIW2I7Jap3q10k4IKbzCA3xQJst6JWd',
                gaming_points: [
                    { new_gaming_point_types__id: 1, points: 8 },
                    { new_gaming_point_types__id: 2, points: 0 }
                ],
                spent_gaming_points: [],
                visibility: {
                    is_design: false,
                    is_vacancy: false,
                    is_signal: true,
                    is_promo: false,
                    is_test: false,
                    is_email_verified: true,
                    is_quizzes_expired: false,
                    is_debtor: false,
                    is_phone_verified: true,
                    is_only_profile: false,
                    is_referral_program: false,
                    is_dz_group_issue: true
                },
                current_group_status: 6
            */
        });

    }

});