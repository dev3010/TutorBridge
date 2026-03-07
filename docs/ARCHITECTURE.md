# TutorBridge – Architecture Document

Production-quality full-stack architecture for **TutorBridge – Smart Tutor Hiring Platform**.

---

## PART 1 — DATABASE SCHEMA (15 TABLES)

### Tables & Relationships

| Table | Primary Key | Foreign Keys | Indexes |
|-------|-------------|--------------|---------|
| **users** | user_id | - | email (unique) |
| **roles** | role_id | - | name (unique) |
| **user_roles** | (user_id, role_id) | user_id → users, role_id → roles | - |
| **tutor_profiles** | tutor_id | user_id → users | city, mode, rating |
| **student_profiles** | student_id | user_id → users | - |
| **subjects** | subject_id | - | subject_name |
| **tutor_subjects** | (tutor_id, subject_id) | tutor_id, subject_id | - |
| **availability_slots** | slot_id | tutor_id → tutor_profiles | tutor_id |
| **bookings** | booking_id | student_id, tutor_id, subject_id, slot_id | student_id, tutor_id, status |
| **payments** | payment_id | booking_id | booking_id |
| **reviews** | review_id | booking_id, student_id, tutor_id | tutor_id, booking_id |
| **favorites** | favorite_id | student_id, tutor_id | student_id, tutor_id, (student,tutor) unique |
| **notifications** | notification_id | user_id | user_id |
| **certificates** | certificate_id | tutor_id | tutor_id |
| **admin_actions** | action_id | admin_id | admin_id |
| **chat_messages** | message_id | sender_id, receiver_id | sender_id, receiver_id |

### Cascade Rules

- **User** → TutorProfile, StudentProfile: `ALL` (delete user deletes profile)
- **TutorProfile** → AvailabilitySlot, Certificates: `ALL`
- **Booking** → Payment, Review: one-to-one, typically `PERSIST` on create

---

## PART 2 — ER DIAGRAM & RELATIONSHIPS

```
┌─────────────┐       ┌──────────────┐       ┌─────────────────┐
│   users     │       │    roles     │       │  tutor_profiles │
├─────────────┤       ├──────────────┤       ├─────────────────┤
│ user_id PK  │──┐    │ role_id PK   │       │ tutor_id PK     │
│ name        │  │    │ name         │       │ user_id FK ─────┼──→ users
│ email       │  └───→│              │       │ bio             │
│ password    │       └──────────────┘       │ experience_yrs  │
│ phone       │                              │ hourly_rate     │
│ is_verified │       ┌──────────────────┐   │ mode            │
│ created_at  │       │  student_profiles│   │ city, area      │
└─────────────┘       ├──────────────────┤   │ rating          │
       │              │ student_id PK    │   └────────┬────────┘
       │              │ user_id FK ──────┼──→ users   │
       │              │ grade_level      │            │
       │              │ preferred_subj   │            │ ManyToMany
       │              └──────────────────┘            │
       │                                              ▼
       │                       ┌─────────────────────────────────┐
       │                       │           subjects              │
       │                       ├─────────────────────────────────┤
       │                       │ subject_id PK                   │
       │                       │ subject_name                    │
       │                       └─────────────────────────────────┘
       │
       │  ┌──────────────────┐     ┌──────────────────┐
       └─→│    bookings      │────→│    payments      │
          ├──────────────────┤     ├──────────────────┤
          │ booking_id PK    │     │ payment_id PK    │
          │ student_id FK ───┼──┐  │ booking_id FK    │
          │ tutor_id FK ─────┼──┼─→│ amount           │
          │ subject_id FK    │  │  │ status           │
          │ slot_id FK       │  │  └──────────────────┘
          │ session_date     │  │
          │ status           │  │  ┌──────────────────┐
          │ price            │  └─→│     reviews      │
          └──────────────────┘     ├──────────────────┤
                                   │ review_id PK     │
          ┌──────────────────┐     │ booking_id FK    │
          │   favorites      │     │ rating, comment  │
          ├──────────────────┤     └──────────────────┘
          │ student_id FK    │
          │ tutor_id FK      │     ┌──────────────────┐
          └──────────────────┘     │  notifications   │
                                   ├──────────────────┤
          ┌──────────────────┐     │ user_id FK       │
          │ availability_    │     │ message, is_read │
          │ slots            │     └──────────────────┘
          ├──────────────────┤
          │ tutor_id FK      │     ┌──────────────────┐
          │ day_of_week      │     │   certificates   │
          │ start_time       │     ├──────────────────┤
          │ end_time         │     │ tutor_id FK      │
          └──────────────────┘     │ file_url         │
                                   └──────────────────┘
```

### Key Relationships

| Relationship | Type | Description |
|--------------|------|-------------|
| User ↔ Role | ManyToMany | User can have multiple roles (STUDENT, TUTOR, ADMIN) |
| User → TutorProfile | OneToOne | One user = one tutor profile |
| User → StudentProfile | OneToOne | One user = one student profile |
| TutorProfile ↔ Subject | ManyToMany | One tutor teaches many subjects |
| TutorProfile → AvailabilitySlot | OneToMany | One tutor has many availability slots |
| User (student) → Booking | OneToMany | One student has many bookings |
| TutorProfile → Booking | OneToMany | One tutor has many bookings |
| Booking → Payment | OneToOne | One booking has one payment |
| Booking → Review | OneToOne | One booking has at most one review |
| User (student) → Favorite | OneToMany | Student can favorite many tutors |
| TutorProfile → Favorite | OneToMany | Tutor can be favorited by many students |

---

## PART 3 — SPRING BOOT FOLDER STRUCTURE

```
src/main/java/com/tutorbridge/
├── config/
│   └── SecurityConfig
├── controller/
│   ├── AuthController
│   ├── UserController
│   ├── TutorController
│   ├── StudentController
│   ├── SearchController
│   ├── BookingController
│   ├── ReviewController
│   ├── PaymentController
│   ├── FavoriteController
│   ├── NotificationController
│   ├── AdminController
│   └── ChatController
├── service/
│   ├── AuthService
│   ├── UserService
│   ├── TutorService
│   ├── StudentService
│   ├── BookingService
│   ├── ReviewService
│   ├── PaymentService
│   ├── SearchService
│   ├── NotificationService
│   ├── AdminService
│   └── impl/
├── repository/
│   ├── UserRepository
│   ├── RoleRepository
│   ├── TutorProfileRepository
│   ├── StudentProfileRepository
│   ├── SubjectRepository
│   ├── BookingRepository
│   ├── PaymentRepository
│   ├── ReviewRepository
│   ├── FavoriteRepository
│   ├── NotificationRepository
│   └── AvailabilitySlotRepository
├── entity/
│   ├── User
│   ├── Role
│   ├── TutorProfile
│   ├── StudentProfile
│   ├── Subject
│   ├── AvailabilitySlot
│   ├── Booking
│   ├── Payment
│   ├── Review
│   ├── Favorite
│   ├── Notification
│   ├── Certificate
│   ├── AdminAction
│   ├── ChatMessage
│   └── enums/
├── dto/
│   ├── AuthDtos
│   ├── TutorProfileDTO
│   ├── BookingRequestDTO
│   ├── ReviewDTO
│   └── PaymentDTO
├── exception/
│   ├── GlobalExceptionHandler
│   └── ResourceNotFoundException
├── security/
│   ├── JwtUtil
│   ├── JwtAuthenticationFilter
│   └── CustomUserDetailsService
└── TutorBridgeApplication
```

---

## PART 4 — JWT AUTHENTICATION FLOW

### 1. Registration

1. User submits email, password, fullName, role.
2. Backend hashes password with **BCrypt**.
3. User saved with `emailVerified=false`, `accountStatus=PENDING_VERIFICATION` (or ACTIVE).
4. JWT returned so user is logged in immediately (optional).

### 2. Login

1. POST `/api/auth/login` with `{ email, password }`.
2. `AuthenticationManager` authenticates against DB.
3. On success, `JwtUtil.generateToken()` creates JWT with:
   - `sub` = email
   - `roles` = [ROLE_STUDENT, ROLE_TUTOR, ...]
   - `exp` = expiry (e.g. 24h)
4. Response: `{ token, userId, fullName, email, roles }`.

### 3. Token Storage (React)

1. Frontend stores token in `localStorage` (or HTTP-only cookie).
2. Axios interceptor adds header: `Authorization: Bearer <token>`.

### 4. Request Flow (Spring Security)

1. `JwtAuthenticationFilter` runs on every request.
2. Extracts token from `Authorization` header.
3. Validates token via `JwtUtil.isTokenValid()`.
4. Loads `UserDetails` from `CustomUserDetailsService`.
5. Sets `SecurityContextHolder.getContext().setAuthentication(auth)`.
6. Request proceeds to controller.

### 5. Role-Based Access

- `@PreAuthorize("hasRole('TUTOR')")` on tutor-only endpoints.
- `SecurityConfig` URL rules: `/api/auth/**` permitAll, `/api/admin/**` hasRole ADMIN, etc.

---

## PART 5 — REACT FRONTEND ARCHITECTURE

### Folder Structure (Material UI)

```
src/
├── components/
│   ├── common/
│   │   ├── Navbar
│   │   ├── Footer
│   │   ├── ProtectedRoute
│   │   ├── LoadingSpinner
│   │   └── Pagination
│   ├── tutor/
│   │   ├── TutorCard
│   │   ├── TutorFilter
│   │   ├── TutorProfileView
│   │   └── AvailabilityCalendar
│   ├── booking/
│   │   ├── BookingModal
│   │   └── BookingCard
│   └── review/
│       ├── RatingStars
│       └── ReviewSection
├── pages/
│   ├── auth/
│   │   ├── LoginPage
│   │   ├── RegisterPage
│   │   ├── TutorRegisterPage
│   │   ├── ForgotPasswordPage
│   │   ├── ResetPasswordPage
│   │   └── VerifyEmailPage
│   ├── student/
│   │   ├── StudentDashboard
│   │   ├── TutorSearchPage
│   │   ├── TutorProfilePage
│   │   ├── BookingPage
│   │   ├── BookingHistoryPage
│   │   ├── FavoritesPage
│   │   ├── ReviewsPage
│   │   ├── PaymentsPage
│   │   └── NotificationsPage
│   ├── tutor/
│   │   ├── TutorDashboard
│   │   ├── ProfileManagement
│   │   ├── AvailabilityPage
│   │   ├── BookingRequestsPage
│   │   ├── SessionHistoryPage
│   │   ├── EarningsPage
│   │   └── ReviewsPage
│   ├── admin/
│   │   ├── AdminDashboard
│   │   ├── ManageTutorsPage
│   │   ├── ApproveTutorsPage
│   │   ├── ManageStudentsPage
│   │   ├── ManageBookingsPage
│   │   ├── TransactionsPage
│   │   └── AnalyticsPage
│   └── public/
│       ├── HomePage
│       ├── AboutPage
│       └── ContactPage
├── context/
│   └── AuthContext
├── services/
│   ├── api.js
│   ├── authService
│   ├── tutorService
│   ├── bookingService
│   ├── paymentService
│   └── reviewService
├── routes/
│   └── AppRoutes
├── App.jsx
└── index.jsx
```

---

## PART 6 — UI PAGE STRUCTURE (30+ PAGES)

### Public

- Home, Login, Register, Forgot Password, Reset Password, Verify Email
- Tutor Search, Tutor Profile (view), About, Contact

### Student

- Student Dashboard, Tutor Search, Tutor Details, Book Session, Booking History
- Favorites, Reviews, Payments, Notifications, Profile Settings

### Tutor

- Tutor Dashboard, Profile Management, Subject Management, Availability Calendar
- Booking Requests, Session History, Earnings, Reviews

### Admin

- Admin Dashboard, Manage Tutors, Approve Tutors, Manage Students
- Manage Bookings, Transactions, Analytics

---

## PART 7 — ADVANCED FEATURES (ARCHITECTURE)

| Feature | Approach |
|---------|----------|
| **Tutor Recommendation** | Rule-based: same subject + city + rating; later ML model |
| **Real-Time Chat** | WebSocket (STOMP) + REST for history |
| **Availability Calendar** | FullCalendar or custom; CRUD `availability_slots` |
| **Video Meetings** | Store `meeting_link` in Booking; integrate Zoom/Meet API |
| **Notifications** | In-app via `notifications` table; email via Spring Mail |
| **Pagination** | `Pageable` in Spring; React table with page/size |
| **Search Optimization** | DB indexes on city, mode, rating; full-text if needed |
| **Caching** | Redis for popular tutor searches; `@Cacheable` |

---

## Development Rules

- Use **DTO pattern**: never expose entities in API responses.
- Service layer for business logic; repository for data access.
- `@Valid` + Bean Validation on request DTOs.
- `GlobalExceptionHandler` for consistent error responses.
- Modular, testable, production-ready structure.
